import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('access-token')
        alert('token remove done')
        navigate('/login')
    }

    return (
        <div className="flex flex-col gap-10">
            this is home

            <Link to='/admin'>
                Admin Dashboard
            </Link>
            <button onClick={handleLogout} className="text-2xl">
                LogOut
            </button>
        </div>
    );
};

export default Home;