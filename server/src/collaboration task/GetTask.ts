import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import FormatedError from "../utils/FormatedError";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedResponse from "../utils/FormatedResponse";
import { Collaboration_Task_Model } from "./collaboration_task.model";
import User from "../users/users.interface";
import TrackingModel from "../point tracking/Tracking.model";

const GetTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const identity = req?.query?.identity;
        const user_payload: User = req?.body?.user;

        // const result = await Collaboration_Task_Model.find({ identity: identity }).session(session);

        const task = await Collaboration_Task_Model.find({ identity: identity })
            .sort('-updatedAt')
            .select('-recuring -identity -createdAt -updatedAt -__v ')
            .session(session);
        const completedTask = await TrackingModel.find({ userId: user_payload?._id }).session(session);

        const filter = task.map((item) => {
            const isComplete = completedTask.some((a) => {
                return String(a?.taskId) === String(item?._id) ? true : false;
            });

            return { item, isComplete }
        })


        res.send(FormatedResponse(OK, 'informission retrived!', filter));
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
export default GetTask;