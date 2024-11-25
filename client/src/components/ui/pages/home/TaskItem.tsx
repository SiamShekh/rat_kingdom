import { FaTelegramPlane } from "react-icons/fa";

const TaskItem = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-4">
                <div className="bg-white bg-opacity-10 p-2 text-white rounded-full">
                    <FaTelegramPlane className="text-3xl" />
                </div>
                <div className="">
                    <p className="line-clamp-2 font-montserrat font-medium text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas, excepturi officia ex facere dolor!</p>
                    <p className="font-montserrat font-bold text-white text-xl text-opacity-50">+ 1000 {import.meta.env.VITE_TOKEN_SYMBOL}</p>
                </div>
                <button className="font-montserrat px-3 rounded-full font-medium bg-white text-white text-xl py-1 bg-opacity-10">Start</button>
            </div>
        </div>
    );
};

export default TaskItem;