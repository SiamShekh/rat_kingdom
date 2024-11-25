import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedError from "../../utils/FormatedError";
import FormatedResponse from "../../utils/FormatedResponse";
import SettingModel from "../setting.model";

const UpdateSettingInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const _id = req?.body?._id;
        const updating = await SettingModel.findByIdAndUpdate(_id, req?.body, { session, new: true });
        res.send(FormatedResponse(OK, 'updated', updating));
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

export default UpdateSettingInfo;