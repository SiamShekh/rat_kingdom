
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatsCard = ({ title, icon, stats_number, result }: { title: string, icon: any, stats_number: string, result: string }) => {
    return (
        <div className="bg-white/10 p-3 rounded-md h-40 relative border border-white/20">
            <p className="text-white text-5xl bg-white/20 p-2 rounded-full absolute right-5 top-5">{icon}</p>
            <p className="font-montserrat text-xl text-white/70 font-medium">{title}</p>
            <p className="font-montserrat text-white text-2xl font-medium">{stats_number}</p>
            <p className="font-montserrat text-white/60 font-medium absolute bottom-3 border-l-2 pl-2">{result}</p>
        </div>
    );
};

export default StatsCard;