import User from "../../../../types/users.interface";

const LeaderUserItem = ({ user , rank}: { user: User, rank:number }) => {
    const rndInt = Math.floor(Math.random() * 5) + 1;

    return (
        <div>
            <div className="rounded-lg flex items-center">
                <div className=" flex-[1.5]">
                    <div className={`size-10 flex justify-center items-center ${rndInt === 1 ? 'bg-orange-800' : rndInt === 2 ? 'bg-yellow-800' : rndInt === 3 ? 'bg-purple-800' : rndInt === 4 ? 'bg-cyan-800' : 'bg-slate-800'}  overflow-hidden relative rounded-full text-xl text-white`}>{String(user?.name?.slice(0, 2)).toUpperCase()}</div>
                </div>
                <div className="flex justify-between items-center w-full flex-[8.5]">
                    <div className="">
                        <p className="font-montserrat text-white text-sm font-medium">{user?.username ? user?.username : user?.name}</p>
                        <p className="font-montserrat text-white text-opacity-60 text-xs font-medium">{user?.point} {import.meta.env.VITE_TOKEN_SYMBOL}</p>
                    </div>

                    <div className="font-montserrat text-xs text-white font-medium">#{rank+1}</div>
                </div>
            </div>
        </div>
    );
};

export default LeaderUserItem;