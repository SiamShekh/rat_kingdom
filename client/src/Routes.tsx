import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Loading from "./pages/splash/Loading";
import SplashLayout from "./Layouts/SplashLayout";
import Premium from "./pages/splash/Premium";
import Age from "./pages/splash/Age";
import Username from "./pages/splash/Username";
import ChannelJoined from "./pages/splash/ChannelJoined";
import Home from "./pages/apps/Home";
import Collaboration from "./pages/apps/Collaboration";
import Leaderboard from "./pages/apps/Leaderboard";
import Friends from "./pages/apps/Friends";
import AdminLayouts from "./Layouts/AdminLayouts";
import Dashboard from "./pages/admins/Dashboard";
import Login from "./pages/admins/Login";
import Tasks from "./pages/admins/Tasks";
import User from "./pages/admins/User";
import Wallet from "./pages/admins/Wallet";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "collaboration",
        element: <Collaboration />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
    ],
  },
  {
    path: "/splash",
    element: <Loading />,
  },
  {
    path: "/new-comer",
    element: <SplashLayout />,
    children: [
      {
        index: true,
        element: <Premium />,
      },
      {
        path: "age",
        element: <Age />,
      },
      {
        path: "username",
        element: <Username />,
      },
      {
        path: "channel-joined",
        element: <ChannelJoined />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      
      {
        path: "/admin/task",
        element: <Tasks />,
      },
      {
        path: "/admin/user",
        element: <User />,
      },
      {
        path: "/admin/wallet",
        element: <Wallet />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Routes;
