import { Schema } from "mongoose";

interface Tracking {
    userId: Schema.Types.ObjectId,
    taskId: Schema.Types.ObjectId,
    point: number,
    type: string,
    category: string,
    _id?: string,
    createdAt?: string,
    updatedAt?: string
}

export default Tracking;