
import { Link, Outlet } from "react-router-dom";
import Register from "../Pages/Register/Register";



const MainLayout = () => {

    const tokenCheck = localStorage.getItem('access-token')
    console.log(tokenCheck)

    return (
        <div>
            <div className="container mx-auto">

                <ul className="flex gap-10 font-semibold">
                    <li>
                        <Link to='/register'>
                            Register
                        </Link>
                    </li>

                    <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>

                    <li>
                        <Link to='/admin'>
                            Admin
                        </Link>
                    </li>

                    <li>
                        <Link to='/home'>
                            Home
                        </Link>
                    </li>
                </ul>

                <div>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;