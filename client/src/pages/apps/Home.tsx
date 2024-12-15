import { useContext, useEffect, useState } from "react";
import BalanceCard from "../../components/ui/pages/home/BalanceCard";
import SwipeableSocialCards from "../../components/ui/pages/home/SwipeableSocialCards";
import Task from "../../components/ui/pages/home/Task";
import RewardsCards from "../../components/ui/pages/home/RewardsCards";
import { useMarkAsOldMutation } from "../../redux-store/api/auth/UserInfoApi";
import { MagicCP } from "../../utils/MagicContext";
import { useTaskListQuery } from "../../redux-store/api/auth/TaskInfoApi";
import task from "../../types/tasks.interface";
type props = {
    item: task,
    isComplete: boolean
}
const Home = () => {
    const [tabValue, setTabValue] = useState("socials");
    const [trigger] = useMarkAsOldMutation();
    const user = useContext(MagicCP);
    useEffect(() => {
        if (user?.user?.is_newcomer) {
            trigger(undefined);
        }
    }, [user?.user]);

    const { data } = useTaskListQuery(undefined);
   
    const socials = data?.data?.filter((item: props) => (item?.item?.type === "social" ? item : null));

    const friend = data?.data?.filter((item: props) => (item?.item?.type === "friend" ? item : null));
    const special = data?.data?.filter((item: props) => (item?.item?.type === "special" ? item : null));
    return (
        <div className="min-h-screen">
            <BalanceCard balance={5000} />
            <div className="mt-4">
                <SwipeableSocialCards />
            </div>
            <p className="font-montserrat text-xl font-bold text-white">Tasks</p>
            <div className="bg-white bg-opacity-10 rounded-xl p-2 flex items-center gap-2">
                <button onClick={() => setTabValue('socials')} className={`${tabValue === "socials" ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>Socials</button>
                <button onClick={() => setTabValue('friends')} className={`${tabValue === "friends" ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>Friends</button>
                <button onClick={() => setTabValue('specials')} className={`${tabValue === "specials" ? 'text-black flex-1 font-bold font-montserrat bg-yellow-500 px-2 rounded-md' : 'text-white'} `}>Specials</button>
            </div>
            <Task category={tabValue} task={tabValue === "socials" ? socials : tabValue === "friends" ? friend : tabValue === "specials" && special} />

            <p className="font-montserrat text-xl font-bold text-white my-2">Your rewards
            </p>
            <RewardsCards />
            <RewardsCards />
            <RewardsCards />
            <RewardsCards />
        </div>
    );
};

export default Home;