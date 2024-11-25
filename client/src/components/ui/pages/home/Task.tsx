import { FaTelegramPlane } from "react-icons/fa";
import TaskItem from "./TaskItem";

const Task = ({ category }: { category: string }) => {
    return (
        <div className="flex flex-col gap-2 mt-5">
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    );
};

export default Task;