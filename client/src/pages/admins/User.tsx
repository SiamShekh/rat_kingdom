import React from 'react';
import UserInfo from '../../components/ui/pages/admin/user/UserInfo';

const User = () => {
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <UserInfo /> */}
                        {/* <UserInfo /> */}
                        {/* <UserInfo /> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;