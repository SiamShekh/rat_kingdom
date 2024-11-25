import { useState } from "react";
import CollaborationModal from "./CollaborationModal";

const CollaborationItem = () => {
    const [open, close] = useState(false);
    return (
        <div>
            <CollaborationModal close={close} open={open}/>
            <div className="border-white border border-opacity-50 p-3 rounded-2xl flex items-center gap-3">
                <img src={import.meta.env.VITE_ICON} alt="logo" className="size-14" />
                <div className="flex justify-between items-center w-full">
                    <div className="">
                        <p className="text-white font-montserrat font-medium text-sm">Crypto King Keyur</p>
                        <p className="font-montserrat font-normal text-xs text-white text-opacity-60">Reward: 2000 RATS</p>
                    </div>
                    <button onClick={()=> close(true)} className="px-3 py-1 bg-white bg-opacity-10 text-white rounded-full font-montserrat ">Start</button>
                </div>
            </div>
        </div>
    );
};

export default CollaborationItem;