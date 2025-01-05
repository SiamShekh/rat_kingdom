import User from "../../../../../types/users.interface";

const UserInfo = ({ user }: { user: User }) => {
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar online placeholder ">
                        <div className="bg-white/20 text-neutral-content w-10 rounded-full">
                            <span className="text-xl font-montserrat uppercase">{user?.name.slice(0, 2)}</span>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold font-montserrat capitalize">{user?.name}</div>
                        <div className="text-sm opacity-50 font-montserrat lowercase">{user?.username ? '@' + user?.username : ''}</div>
                    </div>
                </div>
            </td>
            <td>{user?.point}</td>
            <td>{user?.refer_code}</td>
            <td>{user?.refer_by}</td>
            <td>{user?.createdAt}</td>
        </tr>
    );
};

export default UserInfo;