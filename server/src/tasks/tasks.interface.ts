import { Schema } from "mongoose";

interface task {
    _id?: Schema.Types.ObjectId,
    type: string,
    category: string,
    title: string,
    point: number,
    href: string,
    recuring: 'one_time' | 'multiple',
    createdAt?: string,
    isComplete?: boolean,
    updatedAt?: string
}

export default task;