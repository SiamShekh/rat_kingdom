import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router-dom";
import { useLoginForUserMutation } from "../../redux-store/api/auth/UserInfoApi";
import { useEffect, useState } from "react";

const Loading = () => {

    const [TriggerInstance, { data, status }] = useLoginForUserMutation();
    const [loading, setLoading] = useState(true);
    const [rejected, setRejected] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unSubscibe = () => {
            const user = {
                "Name": WebApp.initDataUnsafe.user?.first_name ? WebApp.initDataUnsafe.user?.first_name : "User" as string + WebApp.initDataUnsafe.user?.last_name ? WebApp.initDataUnsafe.user?.last_name : '',
                "Username": WebApp.initDataUnsafe.user?.username,
                "TgId": WebApp.initDataUnsafe.user?.id,
                "referBy": WebApp.initDataUnsafe.start_param,
                "init": WebApp.initData,
                "premium": WebApp.initDataUnsafe.user?.is_premium ? true : false,
            };
            TriggerInstance(user);
        }
        unSubscibe();
    }, [TriggerInstance]);

    useEffect(() => {
        if (status === 'pending') {
            setLoading(true);
        } else if (status === 'fulfilled') {
            sessionStorage.setItem('token', data?.data?.token);
            WebApp.CloudStorage.setItem('authToken', data?.data?.token);
            console.log(data?.data);

            if (data?.data?.user?.is_newcomer === false) {
                navigate('/', {
                    replace: true,
                });
            } else {
                navigate('/new-comer', {
                    replace: true,
                });
            }
        } else if (status === 'rejected') {
            setLoading(false);
            setRejected(true)
        }
    }, [status, data?.data?.token, data?.data?.user?.is_newcomer, navigate])

    return (
        <div className="min-h-screen flex justify-center items-center bg-black">
            <span hidden={loading} className="loading loading-bars loading-lg text-white"></span>
            <div role="alert" className={`alert alert-error ${rejected ? '' : 'hidden'}`} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Error! Something went wrong...</span>
            </div>
        </div >
    );
};

export default Loading;