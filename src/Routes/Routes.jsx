import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Admin from "../Pages/Admin/Admin";

const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            },
        ]
    }





]);

export default router