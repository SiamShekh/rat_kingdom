import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import { Collaboration_Identity_Model } from "../../collaboration identity/Collaboration_identity.model";
import { Collaboration_Task_Model } from "../collaboration_task.model";
import FormatedResponse from "../../utils/FormatedResponse";
import FormatedError from "../../utils/FormatedError";

const NewTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const body = req?.body;
        const identity = await Collaboration_Identity_Model.findById(body?.identity).session(session);
        if (!identity?._id) {
            throw new Error("Identity not found!");
        }
        const creatition = await Collaboration_Task_Model.create([body], { session });
        res.send(FormatedResponse(OK, 'informission retrived!', creatition[0]));
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
export default NewTask;