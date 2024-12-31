import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { BAD_REQUEST, OK } from "http-status-codes";
import FormatedResponse from "../utils/FormatedResponse";
import FormatedError from "../utils/FormatedError";
import AdminModel from "./admin.model";
import jwt from 'jsonwebtoken';

const LoginAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const session = await mongoose.startSession();
    try {
        const body = req?.body;
        const admin = await AdminModel.findOne({ email: body?.email }).session(session);

        if (!admin?._id) {
            throw new Error("You seem like a ghost.");
        }

        const token = await jwt.sign(JSON.stringify(admin), process.env.JWT_SECRECT as string);

        res.send(FormatedResponse(OK, 'Logged', token));
    } catch (error) {
        if (error instanceof Error) {
            res.status(OK).send(FormatedResponse(BAD_REQUEST, error.message, []));
        } else {
            next(error);
        }
    } finally {
        session.endSession();
    }
};

export default LoginAdmin;