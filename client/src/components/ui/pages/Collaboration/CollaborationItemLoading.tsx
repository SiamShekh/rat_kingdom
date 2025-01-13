
const CollaborationItemLoading = () => {
    return (
        <div>
            <div className="border-white border border-opacity-50 p-3 rounded-2xl">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-white/10 skeleton rounded-full"></div>
                        <div className="">
                            <div className="w-28 h-5 bg-white/10 skeleton rounded-sm"></div>
                            <div className="w-16 h-3 mt-2 bg-white/10 skeleton rounded-sm"></div>
                        </div>
                    </div>
                    <div className="w-12 h-6 bg-white/10 skeleton rounded-sm"></div>
                </div>
            </div>
        </div>
    );
};

export default CollaborationItemLoading;