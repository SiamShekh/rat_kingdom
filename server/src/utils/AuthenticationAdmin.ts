import { NextFunction, Request, Response } from "express";
import FormatedError from "./FormatedError";
import { BAD_REQUEST, FORBIDDEN } from "http-status-codes";
import jwt from "jsonwebtoken";
import UserModel from "../users/users.model";
import AdminModel from "../admin/admin.model";
import FormatedResponse from "./FormatedResponse";
const AuthenticationAdmin = async (Req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = String(Req.headers.authorization)?.split('Bearer')[1]?.trim();

        jwt.verify(token as string, process.env.JWT_SECRECT as string, async (error, decode: any) => {
            if (error) {
                res.send(FormatedResponse(FORBIDDEN, error?.message, []))
            }

            const admin = await AdminModel.findOne({ email: decode?.email });
            if (admin?._id) {
                next();
            } else {
                res.send(FormatedResponse(FORBIDDEN, 'Goosht', []))
            }
        })
    } catch (error) {
        if (error instanceof Error) {
            res.send(FormatedError(BAD_REQUEST, error.message));
        }
    }
};

export default AuthenticationAdmin;