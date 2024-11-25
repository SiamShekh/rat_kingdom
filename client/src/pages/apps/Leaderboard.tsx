import LeaderUserItem from "../../components/ui/pages/leaderboard/LeaderUserItem";

const Leaderboard = () => {
    return (
        <div className="min-h-screen">
            <p className="font-montserrat text-2xl font-bold text-center text-white my-10">Telegram Wall Of Fame</p>

            <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center">
                <div className=" flex-[1.5]">
                    <div className="size-10 flex justify-center items-center bg-purple-800 overflow-hidden relative rounded-full text-xl text-white">SI</div>
                </div>
                <div className="flex justify-between items-center w-full flex-[8.5]">
                    <div className="">
                        <p className="font-montserrat text-white text-sm font-medium">Siiiiam</p>
                        <p className="font-montserrat text-white text-opacity-60 text-xs font-medium">8528 {import.meta.env.VITE_TOKEN_SYMBOL}</p>
                    </div>

                    <div className="font-montserrat text-xs text-white font-medium">#21423</div>
                </div>
            </div>

            <div className="flex justify-between items-center my-5">
                <p className="font-montserrat text-xl text-white font-semibold">354242 holder</p>
                <p className="font-montserrat text-xs text-white font-medium text-opacity-50">Updated every 5 minutes</p>
            </div>

            <div className="flex flex-col gap-2">
                <LeaderUserItem />
                <LeaderUserItem />
                <LeaderUserItem />
                <LeaderUserItem />

            </div>
        </div>
    );
};

export default Leaderboard;