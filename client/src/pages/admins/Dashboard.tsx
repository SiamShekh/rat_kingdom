import { MdAddTask, MdEmojiPeople, MdGeneratingTokens } from "react-icons/md";
import StatsCard from "../../components/ui/pages/admin/dashboard/StatsCard";
import { FaPeopleGroup } from 'react-icons/fa6';
import { useDashboardStatsQuery } from "../../redux-store/api/auth/SettingInfoApi";

const Dashboard = () => {
    const { data } = useDashboardStatsQuery(undefined);

    return (
        <div className='min-h-screen '>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-5">
                <StatsCard
                    icon={<FaPeopleGroup />}
                    result={`In the last 30 days, ${data?.data?.user30d || 0} new users have joined.`}
                    stats_number={data?.data?.user || 0}
                    title="Total User"
                    key={0}
                />
                <StatsCard
                    icon={<MdEmojiPeople />}
                    result={`In the last 24 hours, ${data?.data?.activeUser1d} users is active.`}
                    stats_number={data?.data?.activeUser || 0}
                    title="Active User"
                    key={1}
                />
                <StatsCard
                    icon={<MdAddTask />}
                    result={`In the last 30 days, ${data?.data?.taskComplete30d || 0} tasks have been completed.`}
                    stats_number={data?.data?.taskComplete || 0}
                    title="Task Completed"
                    key={2}
                />
                <StatsCard
                    icon={<MdGeneratingTokens />}
                    result={`In the last 30 days, ${data?.data?.pointHolding30d || 0} new tokens were earned.`}
                    stats_number={data?.data?.pointHolding || 0}
                    title="Token Holding"
                    key={3}
                />
            </div>
        </div>
    );
};

export default Dashboard;