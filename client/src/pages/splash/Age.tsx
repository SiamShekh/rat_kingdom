import { Link } from "react-router-dom";
import premium from "../../assets/strikers/cool_man.gif";
import PageState from "../../components/ui/splash/layout/PageState";
const Age = () => {
    {/* 
            Age
            Premium
            Username
            Channel Joined
            */}
    return (
        <div className="max-h-screen min-h-screen bg-black p-3 relative">
            <PageState serial={2} />
            <img src={premium} className="mx-auto" />
            <p className="font-montserrat text-white text-2xl font-bold text-center my-5">{"You are "}<span className="text-blue-600">{"<3 years"}</span> old.</p>
            <Link to={'/new-comer/username'}>
                <div className="font-montserrat text-2xl font-bold text-white bg-blue-500  p-2 text-center rounded-lg absolute bottom-10 w-[90vw] left-[50%] -translate-x-[50%]">Next</div>
            </Link>
        </div>
    );
};

export default Age;