import { Outlet } from "react-router-dom";

const SplashLayout = () => {
    return (
        <div className="bg-black min-h-screen">
           
            <Outlet/>
        </div>
    );
};

export default SplashLayout;