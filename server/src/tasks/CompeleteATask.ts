import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedResponse from "../utils/FormatedResponse";
import FormatedError from "../utils/FormatedError";
import TaskModel from "./tasks.model";
import User from "../users/users.interface";
import UserModel from "../users/users.model";
import TrackingModel from "../point tracking/Tracking.model";


const CompeleteATask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const user_payload: User = req?.body?.user;
        const taskId = req?.body?.taskId;

        const user = await UserModel.findById(user_payload?._id).session(session);
        const task = await TaskModel.findById(taskId).session(session);
        if (!user?._id) {
            throw new Error("user might be have any isssued!");
        }
        if (!task?._id) {
            throw new Error("task might be have any isssued!");
        }


        if (task?.recuring === 'one_time') {
            const isCompleted = await TrackingModel.findOne({
                userId: user_payload?._id,
                taskId: taskId
            });
            if (isCompleted?._id) {
                throw new Error("already completed that task...");
            }
        }
        
        user.point += task?.point;
        await user.save({ session });
        await TrackingModel.create([{ category: task?.category, type: task?.type, point: task?.point, taskId: task?._id, userId: user?._id }], { session });
        res.send(FormatedResponse(OK, 'Task Info', task));
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

export default CompeleteATask;