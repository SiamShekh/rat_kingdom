import LeaderUserItem from "../../components/ui/pages/leaderboard/LeaderUserItem";
import MeLoading from "../../components/ui/pages/leaderboard/MeLoading";
import UserLoading from "../../components/ui/pages/leaderboard/UserLoading";
import { useLeaderboardQuery } from "../../redux-store/api/auth/UserInfoApi";
import User from "../../types/users.interface";

const Leaderboard = () => {
    const { data, isFetching } = useLeaderboardQuery(undefined);
    const ranking = data?.data?.leaders?.findIndex((item: User) => (item?.TgId === data?.data?.me?.TgId ? item : null)) + 1;


    return (
        <div className="min-h-screen">
            <p className="font-montserrat text-2xl font-bold text-center text-white my-10">Telegram Wall Of Fame</p>
            {
                isFetching ? <MeLoading /> :
                    <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center">
                        <div className=" flex-[1.5]">
                            <div className="size-10 flex justify-center items-center bg-purple-800 overflow-hidden relative rounded-full text-xl text-white">{String(data?.data?.me?.name?.slice(0, 2)).toUpperCase()}</div>
                        </div>
                        <div className="flex justify-between items-center w-full flex-[8.5]">
                            <div className="">
                                <p className="font-montserrat text-white text-sm font-medium">{data?.data?.me?.name}</p>
                                <p className="font-montserrat text-white text-opacity-60 text-xs font-medium">{data?.data?.me?.point} {import.meta.env.VITE_TOKEN_SYMBOL}</p>
                            </div>

                            <div className="font-montserrat text-xs text-white font-medium">#{ranking === 0 ? '100+' : ranking}</div>
                        </div>
                    </div>
            }


            <div className="flex justify-between items-center my-5">
                <p className="font-montserrat text-xl text-white font-semibold">{data?.data?.count ? data?.data?.count : 0} holder</p>
                <p className="font-montserrat text-xs text-white font-medium text-opacity-50">Updated every 1 secound</p>
            </div>

            <div className="flex flex-col gap-2">
                {
                    isFetching ? <>
                        <UserLoading />
                        <UserLoading />
                        <UserLoading />
                        <UserLoading />
                        <UserLoading />
                        <UserLoading />
                        <UserLoading />
                    </> :

                        data?.data?.leaders?.map((item: User, i: number) => (
                            <LeaderUserItem rank={i} user={item} key={i} />
                        ))
                }
            </div>
        </div>
    );
};

export default Leaderboard;