import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedError from "../../utils/FormatedError";
import FormatedResponse from "../../utils/FormatedResponse";
import { Collaboration_Identity_Model } from "../Collaboration_identity.model";

const DeleteIdentity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const deleting = await Collaboration_Identity_Model.findByIdAndDelete(req?.body?._id, { session });
        res.send(FormatedResponse(OK, 'identity deleted!', deleting));
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

export default DeleteIdentity;