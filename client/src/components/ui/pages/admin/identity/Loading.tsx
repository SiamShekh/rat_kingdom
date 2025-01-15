const IdentityLoading = () => {
    return (
        <tr >
            <td>
                <div className="flex items-center gap-3">
                    <div className="size-12 bg-white/20 skeleton rounded-full"></div>
                    <div className="">
                        <div className="w-32 h-6 bg-white/20 skeleton rounded-md"></div>
                        <div className="w-20 mt-2 h-4 bg-white/20 skeleton rounded-md"></div>
                    </div>
                </div>
            </td>
            <td>
                <div className="w-20 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
            <td>
                <div className="w-32 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
            <td className="flex items-center gap-3">
                <div className="w-16 h-6 bg-white/20 skeleton rounded-md"></div>
                <div className="w-16 h-6 bg-white/20 skeleton rounded-md"></div>
            </td>
        </tr>
    );
};

export default IdentityLoading;