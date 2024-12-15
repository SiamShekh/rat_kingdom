import React from "react";
import { CiBoxList } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminLayouts = () => {
  const NavLink = [
    {
      title: "Dashboard",
      link: "/admin",
      icon: <MdDashboard />,
    },
    {
      title: "User",
      link: "/admin/user",
      icon: <FaUser />,
    },
    {
      title: "Task",
      link: "/admin/task",
      icon: <CiBoxList />,
    },
  ];
  const pathName = useLocation()?.pathname;

  return (
    <div className="bg-black">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <div className="navbar text-white lg:hidden">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                className="cursor-pointer btn-primary drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">Admin</a>
            </div>
          </div>
          <div className="p-3">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu lg:bg-white/10 bg-black text-white min-h-full w-60 lg:w-80 p-4">
            <p className="text-xl text-center font-bold font-raleway border-b border-b-blue-300">
              Central Control
            </p>
            <div className="mt-5">
              {NavLink?.map((item, index) => (
                <Link key={index} to={item?.link} className={`flex items-center text-xl my-2 gap-3 p-3  ${item?.link === pathName && 'bg-white/20 rounded-xl border'}`}>
                  {item?.icon} {item?.title}
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayouts;
