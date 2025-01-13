import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import FormatedError from "../utils/FormatedError";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedResponse from "../utils/FormatedResponse";
import { Collaboration_Identity_Model } from "./Collaboration_identity.model";

const GetIdentity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const result = await Collaboration_Identity_Model
            .aggregate([
                {
                    $lookup: {
                        from: "collaboration_tasks",
                        localField: "_id",
                        foreignField: "identity",
                        as: "tasks"
                    }
                },
                {
                    $addFields: {
                        point: { $sum: "$tasks.point" }
                    }
                },
                {
                    $project: {
                        tasks: 0
                    }
                }
            ]);

        res.send(FormatedResponse(OK, 'informission retrived!', result));
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
export default GetIdentity;