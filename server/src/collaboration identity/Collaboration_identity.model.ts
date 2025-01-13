import { model, Schema } from "mongoose";

export interface Collaboration_Identity {
    _id?: string,
    icon: string;
    title: string;
    point?: number;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}

const schema = new Schema<Collaboration_Identity>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

export const Collaboration_Identity_Model = model('Collaboration_Identity', schema);
