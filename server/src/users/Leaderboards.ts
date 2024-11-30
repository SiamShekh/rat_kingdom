import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import User from "./users.interface";
import UserModel from "./users.model";
import FormatedResponse from "../utils/FormatedResponse";
import FormatedError from "../utils/FormatedError";


const Leaderboards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const user_body: User = req?.body?.user;
        const user = await UserModel.findById(user_body?._id).session(session);
        const leader = await UserModel.find({}).sort('-point').limit(100).session(session);
        const count = await UserModel.estimatedDocumentCount();
        res.send(FormatedResponse(OK, 'All Leader!', { me: user, leaders: leader , count}));
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

export default Leaderboards;