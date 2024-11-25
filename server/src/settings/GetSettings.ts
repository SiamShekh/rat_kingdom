import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import SettingModel from "./setting.model";
import FormatedResponse from "../utils/FormatedResponse";
import FormatedError from "../utils/FormatedError";

const GetSettings = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const find = await SettingModel.findOne({}).select('-adminLoginCode').session(session);
        
        res.send(FormatedResponse(OK, 'setting info!', find));
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

export default GetSettings;