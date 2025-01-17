import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedError from "../../utils/FormatedError";
import FormatedResponse from "../../utils/FormatedResponse";
import UserModel from "../../users/users.model";
import TrackingModel from "../../point tracking/Tracking.model";

const DashboardStats = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {

        const last30D = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days ago
        const last7D = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);  // 7 days ago
        const last1D = new Date(Date.now() - 24 * 60 * 60 * 1000);      // 1 day ago

        const user = await UserModel.estimatedDocumentCount();

        const user30d = await UserModel.countDocuments({
            createdAt: { $gte: last30D }
        });

        const activeUser = await UserModel.countDocuments({
            createdAt: { $gte: last7D }
        });

        const activeUser1d = await UserModel.countDocuments({
            createdAt: { $gte: last1D }
        });

        const taskComplete = await TrackingModel.estimatedDocumentCount();

        const taskComplete30d = await TrackingModel.countDocuments({
            createdAt: { $gte: last30D }
        });

        const pointHolding = await UserModel.aggregate([
            {
                $group: {
                    _id: null,
                    point: { $sum: '$point' }
                }
            }
        ]);

        const pointHolding30d = await UserModel.aggregate([
            {
                $match: { createdAt: { $gte: last30D } }
            },
            {
                $group: {
                    _id: null,
                    point: { $sum: '$point' }
                }
            }
        ]);

        res.send(FormatedResponse(OK, 'Stats is retrived', {
            user,
            user30d,
            activeUser,
            activeUser1d,
            taskComplete,
            taskComplete30d,
            pointHolding: pointHolding[0]?.point || 0,
            pointHolding30d: pointHolding30d[0]?.point || 0
        }));
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

export default DashboardStats;