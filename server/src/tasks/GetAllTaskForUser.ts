import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedResponse from "../utils/FormatedResponse";
import FormatedError from "../utils/FormatedError";
import TaskModel from "./tasks.model";
import User from "../users/users.interface";
import TrackingModel from "../point tracking/Tracking.model";


const GetAllTaskForUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const user_payload: User = req?.body?.user;
        const task = await TaskModel.find({}).sort('-updatedAt').session(session);
        const completedTask = await TrackingModel.find({ userId: user_payload?._id }).session(session);

        const filter = task.map((item) => {
            const isComplete = completedTask.some((a) => {
                return String(a?.taskId) === String(item?._id) ? true : false;
            });
         
            return { item, isComplete }
        })

        res.send(FormatedResponse(OK, 'Task Info', filter));
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

export default GetAllTaskForUser;