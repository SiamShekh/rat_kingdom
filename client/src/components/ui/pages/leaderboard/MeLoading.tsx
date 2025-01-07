
const MeLoading = () => {
    return (
        <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center">
                <div className=" flex-[1.5]">
                    <div className="size-10 rounded-full bg-white/10 skeleton"></div>
                </div>
                <div className="flex justify-between items-center w-full flex-[8.5]">
                    <div className="">
                        <p className="bg-white/10 w-40 h-6 skeleton rounded-md" />
                        <p className="bg-white/10 w-20 mt-2 h-4 skeleton rounded-md" />
                    </div>
                    <p className="bg-white/10 size-6 skeleton rounded-md" />
                </div>
            </div>
    );
};

export default MeLoading;