import { isValid } from "@telegram-apps/init-data-node";
import { NextFunction, Request, Response } from "express";
import UserModel from "./users.model";
import mongoose from "mongoose";
import FormatedError from "../utils/FormatedError";
import { BAD_REQUEST, OK } from "http-status-codes";
import { v4 } from "uuid";
import jwt from 'jsonwebtoken';
import FormatedResponse from "../utils/FormatedResponse";

const Login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        if (!isValid(req?.body?.init, process?.env?.BOT_TOKEN as string)) {
            const user = await UserModel.findOne({ TgId: req?.body?.TgId }).session(session);
            if (user?.TgId) {
                const jwts = jwt.sign(JSON.stringify(user), process.env.JWT_SECRECT as string);
                res.status(OK).send(FormatedResponse(OK, 'logged', { token: jwts, user }));
            } else {
                const registering = await UserModel.create([{
                    username: req?.body?.Username,
                    name: req?.body?.Name,
                    TgId: req?.body?.TgId,
                    refer_by: req?.body?.referBy,
                    is_newcomer: true,
                    is_Verify: false,
                    point: 0,
                    refer_code: v4(),
                    wallet: ''
                }], { session });
                const jwts = jwt.sign(JSON.stringify(registering), process.env.JWT_SECRECT as string);
                res.status(OK).send(FormatedResponse(OK, 'registered', { token: jwts, user }));
            }
        } else {
            res.status(BAD_REQUEST).send(FormatedError(BAD_REQUEST, "Invalid token"));
        }
    } catch (error) {
        console.log(error);

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