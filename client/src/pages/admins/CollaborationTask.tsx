import { useState } from 'react';
import TaskLoading from '../../components/ui/pages/admin/task/Loading';
import { useGetCollaborationTaskQuery } from '../../redux-store/api/auth/CollaborationTaskApi';
import AddNewCollaborationTask from '../../components/ui/pages/admin/collaboration_task/AddNewIdentity';
import DeleteConfirmission from '../../components/ui/pages/admin/collaboration_task/DeleteConfirmission';

export interface CollaborationTask {
    _id: string
    title: string
    icon: string
    point: number
    href: string
    category: string
    recuring: string
    identity: string
    createdAt: string
    updatedAt: string
    __v: number
}

const CollaborationTask = () => {
    const [deleteTask, callDelete] = useState<undefined | string>(undefined);
    const [addTaskTrigger, setAddTaskTrigger] = useState(false);
    const { data: tasks, isFetching } = useGetCollaborationTaskQuery(undefined);

    return (
        <div className='min-h-screen text-white font-montserrat'>
            <button onClick={() => setAddTaskTrigger(true)} className='font-montserrat text-white font-medium bg-white/10 px-8 py-2 rounded-md hover:bg-white hover:text-black duration-500'>Add Task</button>
            <AddNewCollaborationTask close={setAddTaskTrigger} open={addTaskTrigger} />
            <DeleteConfirmission close={callDelete} show={deleteTask} />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-white'>
                            <th>Task</th>
                            <th>Point</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Href</th>
                            <th>Recuring</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isFetching ? <>
                                <TaskLoading />
                                <TaskLoading />
                                <TaskLoading />
                                <TaskLoading />
                            </> :
                                tasks?.data?.map((task: CollaborationTask, i: number) => (
                                    <tr key={i}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar placeholder">
                                                    <div className="bg-white/20 text-neutral-content w-12 rounded-full">
                                                        <span>{String(task?.title).slice(0, 2)}</span>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <p>
                                                        {task?.title}
                                                    </p>
                                                    <p className='text-white/60'>{task?._id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{task?.point}</td>
                                        <td>{task?.category}</td>
                                        <td>{task?.href}</td>
                                        <td>{task?.recuring}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs" onClick={() => callDelete(task?._id)}>delete</button>
                                        </th> 
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CollaborationTask;