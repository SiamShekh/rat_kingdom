import { NextFunction, Request, Response } from "express";
import { FORBIDDEN } from "http-status-codes";
import jwt from "jsonwebtoken";
import AdminModel from "../admin/admin.model";
import FormatedResponse from "./FormatedResponse";
const AuthenticationAdmin = async (Req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = String(Req.headers.authorization)?.split('Bearer')[1]?.trim();

        if (token === 'null') {
            res.send(FormatedResponse(FORBIDDEN, "Token not found!", []));
            return;
        }

        jwt.verify(token as string, process.env.JWT_SECRECT as string, async (error, decode: any) => {
            if (error) {
                res.send(FormatedResponse(FORBIDDEN, error?.message, []));
                return;
            }
            const admin = await AdminModel.findOne({ email: decode?.email });
            if (admin?._id) {
                next();
            } else {
                res.send(FormatedResponse(FORBIDDEN, 'Admin not found!', []));
                return;
            }
        })
    } catch (error) {
        if (error instanceof Error) {
            res.send(FormatedResponse(FORBIDDEN, error.message, []));
            return;
        }
    }
};

export default AuthenticationAdmin;