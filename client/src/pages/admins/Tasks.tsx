import React, { useState } from 'react';
import DeleteConfirmission from '../../components/ui/pages/admin/task/DeleteConfirmission';

const Tasks = () => {
    const [deleteTask, callDelete] = useState<undefined | string>(undefined);
    return (
        <div className='min-h-screen text-white font-montserrat'>
            <DeleteConfirmission close={callDelete} show={deleteTask} />
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
                                <button className="btn btn-ghost btn-xs">update</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tasks;