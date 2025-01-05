
const UserInfoLoading = () => {
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar online placeholder ">
                        <div className="bg-white/20 skeleton w-10 rounded-full">
                        </div>
                    </div>
                    <div>
                        <div className="w-52 h-6 bg-white/20 skeleton rounded-md"></div>
                        <div className="w-28 mt-2 h-4 bg-white/20 skeleton rounded-md"></div>
                    </div>
                </div>
            </td>
            <td>
                <div className="w-20 h-6 skeleton bg-white/20 rounded-md"></div>
            </td>
            <td>
                <div className="w-24 h-6 skeleton bg-white/20 rounded-md"></div>
            </td>
            <td>
                <div className="w-28 h-6 skeleton bg-white/20 rounded-md"></div>
            </td>
            <td>
                <div className="w-20 h-6 skeleton bg-white/20 rounded-md"></div>
            </td>
        </tr>
    );
};

export default UserInfoLoading;