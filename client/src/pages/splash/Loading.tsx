import { useNavigate } from "react-router-dom";

const Loading = () => {
    // the loading screen is appire until come the response from server
    // in the time try to retrive user info from server 
    // and if user exists then go on home page and if user is new go on rewards page
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/new-comer', {
            replace: true,
        })
    }, 2000);
    return (
        <div className="min-h-screen flex justify-center items-center bg-black">
            <span className="loading loading-bars loading-lg text-white"></span>
        </div>
    );
};

export default Loading;