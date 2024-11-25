import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import FormatedError from "../utils/FormatedError";
import { BAD_REQUEST, OK } from "http-status-codes";
import UserModel from "./users.model";
import FormatedResponse from "../utils/FormatedResponse";

const GetMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const user = await UserModel.findById(req?.body?.user?._id).session(session);
        if (!user?._id) {
            throw new Error("not exist!");
        }
        res.send(FormatedResponse(OK, 'informission retrived!', user));
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
export default GetMe;