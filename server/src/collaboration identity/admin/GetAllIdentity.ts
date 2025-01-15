import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedError from "../../utils/FormatedError";
import FormatedResponse from "../../utils/FormatedResponse";
import { Collaboration_Identity_Model } from "../Collaboration_identity.model";

const GetAllIdentity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const find = await Collaboration_Identity_Model.find({});
        res.send(FormatedResponse(OK, 'all identity retrived!', find));
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

export default GetAllIdentity;