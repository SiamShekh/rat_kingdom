import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/shared/Apps/BottomNavigation";
import Navbar from "../components/shared/Apps/Navbar";

const MainLayouts = () => {
    return (
        <div className="bg-black min-h-screen relative p-3">
            <Navbar />

            <Outlet />
            <BottomNavigation />
        </div>
    );
};

export default MainLayouts;