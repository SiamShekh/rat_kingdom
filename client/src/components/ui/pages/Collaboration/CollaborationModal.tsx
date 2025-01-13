import React from "react";
import ModalCollaborator from "./ModalCollaborator";
import { useGetTaskQuery } from "../../../../redux-store/api/auth/CollaborationApi";

export interface identity_task {
    item: Item
    isComplete: boolean
}

interface Item {
    _id: string
    title: string
    icon: string
    point: number
    href: string
}


interface props {
    open: string,
    close: React.Dispatch<React.SetStateAction<string | undefined>>
}
const CollaborationModal = ({ open, close }: props) => {
    const { data: tasks, isFetching: taskLoading } = useGetTaskQuery(open);

    const loading = () => <div>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-white/10 skeleton" />
                <div className="">
                    <div className="w-36 h-5 bg-white/10 skeleton rounded-md"></div>
                    <div className="w-16 h-4 mt-2 bg-white/10 skeleton rounded-md"></div>
                </div>
            </div>
            <div className="w-12 h-6 bg-white/10 rounded-md"></div>
        </div>
    </div>;

    return (
        <div>
            <dialog
                open={open ? true : false}
                className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
                onClick={() => close(undefined)}
            >
                <div
                    className="modal-box bg-[#383535] text-white relative"
                    onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
                >
                    <div className="w-10 h-1 bg-white rounded-full fixed top-2 left-[50%] -translate-x-[50%]"></div>
                    <p className="font-montserrat text-2xl font-bold text-center">Collaborator tasks</p>
                    <p className="text-center font-montserrat text-sm text-white text-opacity-70">
                        Crypto King Keyur stands among the top influencers, bringing the Rats Kingdom project to the attention of audiences around the world.
                    </p>

                    <div className="flex flex-col gap-2 my-5">
                        {
                            taskLoading ? <>
                                {loading()}
                                {loading()}
                                {loading()}
                            </> :
                                tasks?.data?.map((task: identity_task, i: number) => (
                                    <ModalCollaborator task={task} key={i} />
                                ))
                        }
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default CollaborationModal;