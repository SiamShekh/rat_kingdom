import { FaCheckCircle } from "react-icons/fa";
import { identity_task } from "./CollaborationModal";
import { useState } from "react";
import WebApp from "@twa-dev/sdk";
import { useCompletedIdentityMutation } from "../../../../redux-store/api/auth/CollaborationApi";

const ModalCollaborator = ({ task }: { task: identity_task }) => {
    const [loading, setLoading] = useState(false);
    const [isClick, setClick] = useState(false);
    const [trigger,] = useCompletedIdentityMutation();

    const HandleTask = () => {
        setLoading(true);
        if (task?.item?.category === "telegram") {
            WebApp.openTelegramLink(task?.item?.href);
        } else {
            WebApp.openLink(task?.item?.href);
        }
        setTimeout(() => {
            setLoading(false);
            setClick(true);
        }, 10000);
    }

    const renderButton = () => {
        if (task?.isComplete) {
            return (
                <button className="font-montserrat px-5 rounded-full font-medium bg-white text-white text-sm py-2 bg-opacity-10">
                    <FaCheckCircle />
                </button>
            );
        }

        if (loading) {
            return (
                <button
                    onClick={() => HandleTask()}
                    className="font-montserrat px-3 rounded-full font-medium bg-white text-white text-sm py-1 bg-opacity-10"
                >
                    <span className="loading loading-dots loading-sm"></span>
                </button>
            );
        }

        if (isClick) {
            return (
                <button
                    onClick={() => trigger({ taskId: task?.item?._id as string })}
                    className="font-montserrat px-3 rounded-full font-medium bg-white text-white text-sm py-1 bg-opacity-10"
                >
                    Claim
                </button>
            );
        }

        return (
            <button
                onClick={() => HandleTask()}
                className="font-montserrat px-3 rounded-full font-medium bg-white text-white text-sm py-1 bg-opacity-10"
            >
                Start
            </button>
        );
    };

    return (
        <div>
            <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                    <img src={task?.item?.icon} alt={task?.item?.title} className="size-9 bg-white rounded-full" />
                    <div className="">
                        <p className="line-clamp-1 font-montserrat text-sm font-medium">{task?.item?.title}</p>
                        <p className="line-clamp-1 font-montserrat text-xs font-medium uppercase text-white/60">{task?.item?.point} {import.meta.env.VITE_TOKEN_SYMBOL}</p>
                    </div>
                </div>
                {renderButton()}
                {/* <button className="bg-black bg-opacity-70 px-3 py-1 rounded-full font-montserrat text-sm">Start</button> */}
            </div>
        </div>
    );
};

export default ModalCollaborator;