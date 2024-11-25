import { NextFunction, Request, Response } from "express";
import FormatedError from "./FormatedError";
import { BAD_REQUEST } from "http-status-codes";
import jwt from "jsonwebtoken";
const DecodeAuth = async (Req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = String(Req.headers.authorization).split('Bearer')[1].trim();
        jwt.verify(token as string, process.env.JWT_SECRECT as string, (error, decode) => {
            if (error) {
                throw new Error(error.message);
            }

            Req.body.user = decode;
            next();
        })
    } catch (error) {
        if (error instanceof Error) {
            res.send(FormatedError(BAD_REQUEST, error.message));
        }
    }
};

export default DecodeAuth;