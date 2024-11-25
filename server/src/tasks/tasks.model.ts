import { model, Schema } from "mongoose";
import task from "./tasks.interface";

const schema = new Schema<task>({
    category: {
        enum: ['telegram', 'facebook', 'youtube', 'x', 'visit'],
        type: String,
        required: true
    },
    type: {
        enum: ['social', 'special', 'friend'],
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    point: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const TaskModel = model('task', schema);
export default TaskModel;