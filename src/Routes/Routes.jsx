import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Brands from "../Pages/Brands/Brands";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
// import PersonaLinfo from "../Dashboard/UserDashboard/Profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brands',
                element: <Brands></Brands>
            },


        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            }
        ]
    }

]);

export default router