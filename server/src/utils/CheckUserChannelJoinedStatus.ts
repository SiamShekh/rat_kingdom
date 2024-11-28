import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import FormatedError from "../utils/FormatedError";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedResponse from "../utils/FormatedResponse";
import SettingModel from "../settings/setting.model";

const CheckUserChannelJoinedStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const setting = await SettingModel.findOne({}).session(session);
        const info = await fetch(`https://api.telegram.org/bot${setting?.botToken}/getChatMember?chat_id=${setting?.channelLink}&user_id=${req?.body?.user?.TgId}`);
        const response = await info.json();
        res.send(FormatedResponse(OK, 'channel joining informission retrived!', response));
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
export default CheckUserChannelJoinedStatus;