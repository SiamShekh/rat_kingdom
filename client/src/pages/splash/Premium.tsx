import { Link } from "react-router-dom";
import premium from "../../assets/strikers/premium_user.gif";
import PageState from "../../components/ui/splash/layout/PageState";
import WebApp from "@twa-dev/sdk";
const Premium = () => {
    {/* 
            Age
            Premium
            Username
            Channel Joined
            */}
            console.log(WebApp.CloudStorage.getItem('token'));
            
    return (
        <div className="max-h-screen min-h-screen bg-black p-3 relative">
            <PageState serial={1} />
            <img src={premium} className="mx-auto" />
            <p className="font-montserrat text-white text-2xl font-bold text-center my-5">Yeah, you're a premium user.</p>
            <Link to={'/new-comer/age'}>
                <div className="font-montserrat text-2xl font-bold text-white bg-blue-500  p-2 text-center rounded-lg absolute bottom-10 w-[90vw] left-[50%] -translate-x-[50%]">Next</div>
            </Link>
        </div>
    );
};

export default Premium;