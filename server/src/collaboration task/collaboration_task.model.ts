import { model, Schema, Types } from "mongoose";

export interface Collaboration_Task {
    _id?: string,
    identity: Types.ObjectId;
    title: string;
    point: number;
    icon: string;
    href: string,
    recuring: 'one_time' | 'multiple',
    createdAt?: string;
    updatedAt?: string;
}

const schema = new Schema<Collaboration_Task>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String,
        required: true,
    },
    point: {
        type: Number,
        required: true
    },
    href: {
        type: String,
        required: true
    },
    recuring: {
        type: String,
        required: true,
        enum: ['one_time', 'multiple']
    },
    identity: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Collaboration_Identity'
    }
}, {
    timestamps: true
});

export const Collaboration_Task_Model = model('Collaboration_Task', schema);
