import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col gap-10">
            this is home

            <Link to='/admin'>
                Admin Dashboard
            </Link>
        </div>
    );
};

export default Home;