import TaskItem from "./TaskItem";
import task from "../../../../types/tasks.interface";
type props = {
    item: task,
    isComplete: boolean
}
const Task = ({ category, task }: { category: string, task: props[] }) => {
    console.log(task);

    return (
        <div className="flex flex-col gap-2 mt-5">
            {
                task?.map((item: props) => (
                    <TaskItem task={item}/>
                ))
            }
        </div>
    );
};

export default Task;