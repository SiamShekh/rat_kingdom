import { Link } from "react-router-dom";
import chat from "../../assets/strikers/chatting.gif";
import PageState from "../../components/ui/splash/layout/PageState";
import { FaTelegram } from "react-icons/fa";

const ChannelJoined = () => {

    return (
        <div className="max-h-screen min-h-screen bg-black p-3 relative">
            <PageState serial={4} />
            <img src={chat} className="mx-auto" />
            <p className="font-montserrat text-red-500 text-2xl font-bold text-center my-5">Oh! You haven't joined our channel yet. Please join to receive rewards.</p>

            <div className="w-full p-3 bg-white bg-opacity-10 rounded-lg flex justify-between items-center gap-3">
                <FaTelegram className="text-white text-4xl"/>
                <div className="flex flex-col ">
                    <p className="text-white font-montserrat capitalize font-bold text-xl">Join telegram</p>
                    <p className="text-white font-montserrat capitalize text-opacity-50 text-xs">please join our telegram channel for getting updates</p>
                </div>

                <button className="text-black px-3 py-1 rounded-full font-medium font-montserrat bg-white">Join</button>
            </div>

            <Link to={'/'}>
                <div className="font-montserrat text-2xl font-bold text-white bg-blue-500  p-2 text-center rounded-lg absolute bottom-10 w-[90vw] left-[50%] -translate-x-[50%]">Next</div>
            </Link>
        </div>
    );
};

export default ChannelJoined;