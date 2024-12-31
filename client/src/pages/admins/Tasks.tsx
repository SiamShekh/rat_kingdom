import  { useState } from 'react';
import DeleteConfirmission from '../../components/ui/pages/admin/task/DeleteConfirmission';
import AddNewTask from '../../components/ui/pages/admin/task/AddNewTask';
import task from '../../types/tasks.interface';
import UpdateTask from '../../components/ui/pages/admin/task/UpdateTask';

const Tasks = () => {
    const [deleteTask, callDelete] = useState<undefined | string>(undefined);
    const [updateTask, callUpdate] = useState<Partial<task> | undefined>(undefined);
    const [addTaskTrigger, setAddTaskTrigger] = useState(false);

    return (
        <div className='min-h-screen text-white font-montserrat'>
            <button onClick={()=> setAddTaskTrigger(true)} className='font-montserrat text-white font-medium bg-white/10 px-8 py-2 rounded-md hover:bg-white hover:text-black duration-500'>Add Task</button>
            <AddNewTask close={setAddTaskTrigger} open={addTaskTrigger}/>
            <DeleteConfirmission close={callDelete} show={deleteTask} />
            <UpdateTask close={callUpdate} open={updateTask} />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-white'>
                            <th>Title</th>
                            <th>Point</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Href</th>
                            <th>Recuring</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Join Telegram</td>
                            <td>5000</td>
                            <td>Telegram</td>
                            <td>social</td>
                            <td>www.tg.com</td>
                            <td>onetime</td>
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => callDelete('delete')}>delete</button>
                                <button className="btn btn-ghost btn-xs" onClick={()=> callUpdate({
                                    _id: 'abc',
                                    category: 'facebook',
                                    title: 'asbdas',
                                    point: 900,
                                    
                                })}>update</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tasks;