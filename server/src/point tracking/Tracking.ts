import { NextFunction, Request, Response } from "express";
import mongoose, { Types } from "mongoose";
import FormatedError from "../utils/FormatedError";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedResponse from "../utils/FormatedResponse";
import TrackingModel from "./Tracking.model";

const Tracking = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const social = await TrackingModel.aggregate([
            {
                '$match': {
                    'userId': new Types.ObjectId(req?.body?.user?._id),
                    'type': 'social'
                }
            }, {
                '$group': {
                    '_id': null,
                    'point': {
                        '$sum': '$point'
                    }
                }
            }
        ]);
        console.log(social);

        const special = await TrackingModel.aggregate([
            {
                '$match': {
                    'userId': new Types.ObjectId(req?.body?.user?._id),
                    'type': 'special'
                }
            }, {
                '$group': {
                    '_id': null,
                    'point': {
                        '$sum': '$point'
                    }
                }
            }
        ]);
        console.log(special);

        const friend = await TrackingModel.aggregate([
            {
                '$match': {
                    'userId': new Types.ObjectId(req?.body?.user?._id),
                    'type': 'friend'
                }
            }, {
                '$group': {
                    '_id': null,
                    'point': {
                        '$sum': '$point'
                    }
                }
            }
        ]);

        res.send(FormatedResponse(OK, 'informission retrived!', {
            social: social[0]?.point,
            special: special[0]?.point,
            friend: friend[0]?.point,
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
export default Tracking;