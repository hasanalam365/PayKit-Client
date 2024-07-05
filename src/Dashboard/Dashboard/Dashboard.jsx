import { NavLink, Outlet } from "react-router-dom";
import { MdOutlinePersonalInjury } from "react-icons/md";

import { FiShoppingBag } from "react-icons/fi";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineLogout } from "react-icons/ai";

import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";

const Dashboard = () => {

    const dashNavLinks = <>
        <NavLink to="/dashboard/profile" className='flex gap-3 items-center justify-center hover:text-orange-600'>
            <MdOutlinePersonalInjury />
            <li>Personal Info</li>
        </NavLink>
        <NavLink className='flex gap-3 items-center justify-center hover:text-orange-600'>
            <FiShoppingBag />
            <li>My Orders</li>
        </NavLink>
        <NavLink className='flex gap-3 items-center justify-center hover:text-orange-600'>
            <TiHomeOutline />
            <li>Address</li>
        </NavLink>

        <NavLink className='flex gap-3 items-center justify-center hover:text-orange-600'>
            <AiOutlineLogout />
            <li>Logout</li>
        </NavLink>

    </>

    return (
        <div>
            <Navber></Navber>
            <div className="mt-5 bg-gray-50 mb-5 p-16 flex ">
                {/* navItems */}
                <div className="w-1/4 ">
                    <ul className="flex flex-col items-start space-y-1 font-medium">
                        {dashNavLinks}

                    </ul>
                </div>

                {/* Info Items */}
                <div className="w-2/4">

                    <Outlet></Outlet>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;