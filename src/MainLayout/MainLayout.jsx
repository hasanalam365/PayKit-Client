import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navber></Navber>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;