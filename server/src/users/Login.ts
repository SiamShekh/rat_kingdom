import { isValid } from "@telegram-apps/init-data-node";
import { NextFunction, Request, Response } from "express";
import UserModel from "./users.model";
import mongoose from "mongoose";
import FormatedError from "../utils/FormatedError";
import { BAD_REQUEST, OK } from "http-status-codes";
import { v4 } from "uuid";
import jwt from 'jsonwebtoken';
import FormatedResponse from "../utils/FormatedResponse";
import 'dotenv/config';
import SettingModel from "../settings/setting.model";
import TrackingModel from "../point tracking/Tracking.model";

const Login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        if (!isValid(req?.body?.init, process?.env?.BOT_TOKEN as string)) {
            const user = await UserModel.findOne({ TgId: req?.body?.TgId }).session(session);
            const setting = await SettingModel.findOne({}).session(session);
            
            if (user?.TgId) {
                const jwts = jwt.sign(JSON.stringify(user), process.env.JWT_SECRECT as string);
                res.status(OK).send(FormatedResponse(OK, 'logged', { token: jwts, user }));
            } else {
                const referer = await UserModel.findOne({ refer_code: req?.body?.referBy }).session(session);
                if (referer?._id) {
                    const bonus = req?.body?.premium
                        ? setting?.premiumReferringBonus
                        : setting?.genarelReferringBonus;
                    
                    referer.point += Number(bonus) || 0;
                    await referer.save({ session });

                    await TrackingModel.create([{
                        userId: referer?._id,
                        taskId: referer?._id,
                        category: 'referering',
                        type: 'refer',
                        point: bonus
                    }], { session });
                }

                let bonus;
                if (req?.body?.referBy) {
                    bonus = req?.body?.premium
                        ? setting?.newcomerPremiumReferrelBonus
                        : setting?.newcomerReferrelBonus;
                } else {
                    bonus = setting?.newcomerBonus;
                }

                
                const registering = await UserModel.create([{
                    username: req?.body?.Username,
                    name: req?.body?.Name,
                    TgId: req?.body?.TgId,
                    refer_by: req?.body?.referBy,
                    is_newcomer: true,
                    is_Verify: false,
                    point: bonus,
                    refer_code: v4(),
                    wallet: ''
                }], { session });

                await TrackingModel.create([{
                    taskId: registering[0]?._id,
                    category: 'joining_bonus',
                    point: bonus,
                    type: 'extra',
                    userId: registering[0]?._id
                }], { session });

                const jwts = jwt.sign(JSON.stringify(registering), process.env.JWT_SECRECT as string);
                res.status(OK).send(FormatedResponse(OK, 'registered', { token: jwts, user }));
                return;
            }
        } else {
            res.status(BAD_REQUEST).send(FormatedError(BAD_REQUEST, "Invalid token"));
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(BAD_REQUEST).send(FormatedError(BAD_REQUEST, error.message));
        } else {
            next(error);
        }
    } finally {
        session.endSession();
    }
};

export default Login;