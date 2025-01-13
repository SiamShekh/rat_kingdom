import { FaYoutube } from "react-icons/fa";
import { identity_task } from "./CollaborationModal";

const ModalCollaborator = ({ task }: { task: identity_task }) => {

    return (
        <div hidden={task?.isComplete}>
            <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                    <img src={task?.item?.icon} alt={task?.item?.title} className="size-10 rounded-full"/>
                    <div className="">
                        <p className="line-clamp-1 font-montserrat text-xl font-medium">{task?.item?.title}</p>
                        <p className="line-clamp-1 font-montserrat text-xs font-medium uppercase text-white/60">{task?.item?.point} {import.meta.env.VITE_TOKEN_SYMBOL}</p>
                    </div>
                </div>
                <button className="bg-black bg-opacity-70 px-3 py-1 rounded-full font-montserrat text-xl">Start</button>
            </div>
        </div>
    );
};

export default ModalCollaborator;