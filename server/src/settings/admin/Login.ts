import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedError from "../../utils/FormatedError";
import FormatedResponse from "../../utils/FormatedResponse";
import SettingModel from "../setting.model";
import ProjectSettings from "../setting.interface";

const Login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const loginCode = req?.body?.loginCode;
        const setting = await SettingModel.find({}).session(session);
        if (setting?.length === 0) {
            const projectSettings: ProjectSettings = {
                adminLoginCode: loginCode,
                projectName: "Syntax Siam",
                projectSymbol: "SSM",
                referralRewards: 50,
                referralCommissionRate: 5,
                newcomerBonus: 20,
                tonWalletAddress: "EQCdZyP6jtxupXZk6Wn5-7Hz_R9D3C9yBMc8XNtrIzIZ97nQ",
                tonTransferAmount: 1000,
                botToken: "",
                channelLink: ''
            };

            const createSetting = await SettingModel.create([projectSettings], { session: session });
            res.send(FormatedResponse(OK, 'new setting created!', createSetting));
        } else {
            const matchSetting = await SettingModel.findOne({ adminLoginCode: loginCode }).session(session);
            if (matchSetting?._id) {
                res.send(FormatedResponse(OK, 'logged!', matchSetting));
            } else {
                throw new Error("wrong code!");
            }
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