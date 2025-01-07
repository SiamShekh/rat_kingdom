
const UserLoading = () => {
    return (
        <div className="rounded-lg flex items-center">
            <div className=" flex-[1.5]">
                <div className="size-10 rounded-full bg-white/10 skeleton"></div>
            </div>
            <div className="flex justify-between items-center w-full flex-[8.5]">
                <div className="">
                    <div className="w-40 h-6 rounded-sm bg-white/10 skeleton"></div>
                    <div className="w-24 h-4 mt-2 rounded-sm bg-white/10 skeleton"></div>
                </div>
                <div className="size-6 bg-white/10 skeleton rounded-md"></div>
            </div>
        </div>
    );
};

export default UserLoading;