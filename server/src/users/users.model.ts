import { model, Schema } from "mongoose";
import User from "./users.interface";

const UserSchema = new Schema<User>({
    TgId: {
        required: true,
        type: Number,
        unique: true
    },
    username: {
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    point: {
        required: true,
        type: Number,
    },
    wallet: {
        required: false,
        type: String,
    },
    refer_code: {
        required: true,
        type: String,
    },
    refer_by: {
        required: false,
        type: String,
    },
    is_newcomer: {
        required: true,
        type: Boolean,
    },
    is_Verify: {
        required: true,
        type: Boolean,
    },
}, {
    timestamps: true
});

const UserModel = model("user", UserSchema);
export default UserModel;