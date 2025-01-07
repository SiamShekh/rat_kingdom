
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RewardsCards = ({icon, title, point}: {icon: any, title: string, point: string}) => {
    return (
        <div className="flex items-center gap-2 my-2">
            <div className="bg-white text-white rounded-full p-3 bg-opacity-10 text-sm">
                {/* <icon className="text-sm" /> */}
                {icon}
            </div>
            <div className="flex justify-between items-center w-full">
                <p className="font-montserrat font-medium text-white">{title}</p>
                <p className="font-montserrat text-xs font-medium text-white text-opacity-40">+ {point} {import.meta.env.VITE_TOKEN_SYMBOL}</p>
            </div>
        </div>
    );
};

export default RewardsCards;