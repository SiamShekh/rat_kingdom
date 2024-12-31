import { MdAddTask, MdEmojiPeople, MdGeneratingTokens } from "react-icons/md";
import StatsCard from "../../components/ui/pages/admin/dashboard/StatsCard";
import { FaPeopleGroup } from 'react-icons/fa6';
import { useDashboardStatsQuery } from "../../redux-store/api/auth/SettingInfoApi";

const Dashboard = () => {
    const { data } = useDashboardStatsQuery(undefined);
    console.log(data);

    return (
        <div className='min-h-screen '>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-5">
                <StatsCard
                    icon={<FaPeopleGroup />}
                    result="In the last 30 days, 4,000 new users have joined."
                    stats_number="5000000"
                    title="Total User"
                    key={0}
                />
                <StatsCard
                    icon={<MdEmojiPeople />}
                    result="In the last 24 hours, 1,000 users is active."
                    stats_number="1000"
                    title="Active User"
                    key={1}
                />
                <StatsCard
                    icon={<MdAddTask />}
                    result="In the last 30 days, 30,000 tasks have been completed."
                    stats_number="50000"
                    title="Task Completed"
                    key={2}
                />
                <StatsCard
                    icon={<MdGeneratingTokens />}
                    result="In the last 30 days, 442,421 new tokens were earned."
                    stats_number="5000000545"
                    title="Token Holding"
                    key={3}
                />
            </div>
        </div>
    );
};

export default Dashboard;