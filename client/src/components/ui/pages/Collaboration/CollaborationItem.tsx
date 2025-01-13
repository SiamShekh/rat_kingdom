import { useState } from "react";
import CollaborationModal from "./CollaborationModal";
import { identity } from "../../../../pages/apps/Collaboration";

const CollaborationItem = ({ identity }: { identity: identity }) => {
    const [open, close] = useState<string | undefined>(undefined);
    return (
        <div>
            <CollaborationModal close={close} open={open} />
            <div className="border-white border border-opacity-50 p-3 rounded-2xl flex items-center gap-3">
                <img src={identity?.icon} alt="logo" className="size-10" />
                <div className="flex justify-between items-center w-full">
                    <div className="">
                        <p className="text-white font-montserrat font-medium text-sm">{identity?.title}</p>
                        <p className="font-montserrat font-normal text-xs text-white text-opacity-60">Reward: {identity?.point} RATS</p>
                    </div>
                    <button onClick={() => close(identity?._id)} className="px-3 py-1 bg-white bg-opacity-10 text-white rounded-full font-montserrat ">Start</button>
                </div>
            </div>
        </div>
    );
};

export default CollaborationItem;