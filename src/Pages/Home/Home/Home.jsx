import Banner from "../Banner/Banner";
import NewArrival from "../NewArrival/NewArrival";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArrival></NewArrival>


            <div className="flex flex-col md:flex-row lg:flex-row gap-5 p-4">
                <div className="flex-1">
                    <img className="h-[300px] md:h-[300px] lg:h-[400px] w-full rounded-lg" src="https://i.ibb.co/JmS84pt/home-down-2.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <img className="h-[300px] md:h-[300px] lg:h-[400px] w-full rounded-lg" src="https://i.ibb.co/m9XYrXP/home-down-1.jpg" alt="" />
                </div>
            </div>

            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;