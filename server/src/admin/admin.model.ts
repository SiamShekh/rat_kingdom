import { model, Schema, Types } from "mongoose";

interface admin {
    _id?: Types.ObjectId,
    email: string,
    password: string
}

const schema = new Schema<admin>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const AdminModel = model('admin', schema);
export default AdminModel;