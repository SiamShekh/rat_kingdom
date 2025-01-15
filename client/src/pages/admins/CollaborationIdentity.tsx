import { useState } from 'react';
import { identity } from '../apps/Collaboration';
import IdentityLoading from '../../components/ui/pages/admin/identity/Loading';
import AddNewIdentity from '../../components/ui/pages/admin/identity/AddNewIdentity';
import { useGetAdminIdentityQuery } from '../../redux-store/api/auth/IdentityApi';
import DeleteConfirmission from '../../components/ui/pages/admin/identity/DeleteConfirmission';

export interface Identity {
    _id: string
    title: string
    icon: string
    description: string
    createdAt: string
    updatedAt: string
    __v: number
    point: number
}


const CollaborationIdentity = () => {
    const [deleteIdentity, callDelete] = useState<undefined | string>(undefined);
    const [addTaskTrigger, setAddTaskTrigger] = useState(false);
    const { data: tasks, isFetching } = useGetAdminIdentityQuery(undefined);

    return (
        <div className='min-h-screen text-white font-montserrat'>
            <button onClick={() => setAddTaskTrigger(true)} className='font-montserrat text-white font-medium bg-white/10 px-8 py-2 rounded-md hover:bg-white hover:text-black duration-500'>Add Identity</button>
            <AddNewIdentity close={setAddTaskTrigger} open={addTaskTrigger} />
            <DeleteConfirmission close={callDelete} show={deleteIdentity} />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-white'>
                            <th>Identity</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isFetching ? <>
                                <IdentityLoading />
                                <IdentityLoading />
                                <IdentityLoading />
                                <IdentityLoading />
                            </> :
                                tasks?.data?.map((identity: identity, i: number) => (
                                    <tr key={i}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar placeholder">
                                                    <div className="bg-white/10 text-neutral-content w-12 rounded-full">
                                                        <span className="text-xs">{String(identity?.title).slice(0,2)}</span>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <p>{identity?.title}</p>
                                                    <p className='text-white/50'>{identity?._id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='max-w-40 line-clamp-1'>{identity?.description}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs" onClick={() => callDelete(identity?._id)}>delete</button>
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

export default CollaborationIdentity;