import { Link } from "react-router-dom";
import love from "../../assets/strikers/loving.gif";
import PageState from "../../components/ui/splash/layout/PageState";
const Username = () => {
    {/* 
            Age
            Premium
            Username
            Channel Joined
            */}
    return (
        <div className="max-h-screen min-h-screen bg-black p-3 relative">
            <PageState serial={3} />
            <img src={love} className="mx-auto" />
            <p className="font-montserrat text-white text-2xl font-bold text-center my-5">Excellent! You have an epic username.</p>
            <Link to={'/new-comer/channel-joined'}>
                <div className="font-montserrat text-2xl font-bold text-white bg-blue-500  p-2 text-center rounded-lg absolute bottom-10 w-[90vw] left-[50%] -translate-x-[50%]">Next</div>
            </Link>
        </div>
    );
};

export default Username;