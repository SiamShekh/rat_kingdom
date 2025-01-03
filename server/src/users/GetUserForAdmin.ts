import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import UserModel from "./users.model";
import FormatedResponse from "../utils/FormatedResponse";
import FormatedError from "../utils/FormatedError";


const GetUserForAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const users = await UserModel
            .find({})
            .sort('-createdAt')
            .limit(10)
            .session(session);
        res.send(FormatedResponse(OK, 'users info retrived!', users));
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

export default GetUserForAdmin;