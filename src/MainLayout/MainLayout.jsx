import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Login></Login>
                <Register></Register>

            </div>

        </div>
    );
};

export default MainLayout;