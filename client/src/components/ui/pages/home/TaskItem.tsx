import { FaCheckCircle, FaFacebook, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import task from "../../../../types/tasks.interface";
import { GiArrowCursor } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { useCompletedTasksMutation } from "../../../../redux-store/api/auth/TaskInfoApi";
import { useState } from "react";
import WebApp from "@twa-dev/sdk";
type props = {
    item: task,
    isComplete: boolean
}
const TaskItem = ({ task }: { task: props }) => {
    const [trigger,] = useCompletedTasksMutation();
    const [loading, setLoading] = useState(false);
    const [isClick, setClick] = useState(false);
    const getCoin = (value: 'telegram' | 'facebook' | 'youtube' | 'x' | 'visit') => {
        switch (value) {
            case "telegram":
                return <FaTelegramPlane className="text-3xl" />;
            case "facebook":
                return <FaFacebook className="text-3xl" />;
            case "youtube":
                return <FaYoutube className="text-3xl" />;
            case "visit":
                return <GiArrowCursor className="text-3xl" />;
            case "x":
                return <FaXTwitter className="text-3xl" />;
            default:
                return <HiMiniCursorArrowRays className="text-3xl" />;
        }
    };
    
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
                    <span className="loading loading-dots loading-lg"></span>
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
            <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-white bg-opacity-10 p-2 text-white rounded-full">
                        {getCoin(task?.item?.category)}
                    </div>
                    <div>
                        <p className="line-clamp-2 font-montserrat font-medium text-white text-sm">{task?.item?.title}</p>
                        <p className="font-montserrat font-bold text-white text-sm text-opacity-50">+ {task?.item?.point} {import.meta.env.VITE_TOKEN_SYMBOL}</p>
                    </div>
                </div>
                {
                    renderButton()
                }
            </div>
        </div>
    );
};

export default TaskItem;