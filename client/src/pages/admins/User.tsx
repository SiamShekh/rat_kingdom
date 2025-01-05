import UserInfo from '../../components/ui/pages/admin/user/UserInfo';
import { useGetLatestUserQuery } from '../../redux-store/api/auth/UserInfoApi';
import UserInfoLoading from '../../components/ui/pages/admin/user/UserInfoLoading';

interface User {
    _id: string,
    TgId: number,
    username?: string,
    name: string,
    point: number,
    refer_code: string,
    refer_by?: string,
    wallet?: string,
    is_Verify: boolean,
    is_newcomer: boolean,
    createdAt?: string,
    updatedAt?: string
}

const User = () => {
    const { data: users, isFetching } = useGetLatestUserQuery(undefined);

    return (
        <div className='min-h-screen text-white font-montserrat'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-white'>
                            <th>Name</th>
                            <th>Point</th>
                            <th>Refer code</th>
                            <th>Referred By </th>
                            <th>User Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isFetching ? <>
                                <UserInfoLoading />
                                <UserInfoLoading />
                                <UserInfoLoading />
                                <UserInfoLoading />
                            </> :
                                users?.data?.map((user: User, key: number) => (
                                    <UserInfo user={user} key={key} />
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;