import { model, Schema } from "mongoose";
import Tracking from "./Tracking.interface";

const schema = new Schema<Tracking>({
    userId: {
        type: Schema.ObjectId,
        required: true,
        ref: 'user'
    },
    taskId: {
        type: Schema.ObjectId,
        required: true,
        ref: 'task'
    },
    category: {
        type: String,
        required: true,
    },
    point: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
})

const TrackingModel = model('tracking', schema);
export default TrackingModel;