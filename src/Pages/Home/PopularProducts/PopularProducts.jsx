import { FaRegHeart, FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";

const PopularProducts = () => {
    return (
        <div className="bg-gray-100 rounded-lg p-4 mt-10">
            <div>
                <h3 className="text-3xl font-semibold">Popular Products</h3>
                <div className="divider mt-0"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <div className="card card-compact bg-base-100 shadow-xl mt-5">
                        <figure>

                            <img className='w-full h-[150px]' src="https://i.ibb.co/h7kxcXp/6932249-30191.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-lg font-medium">Fitbit Versa 4</h2>
                            <p className="font-medium">$ <span className="">1200</span></p>

                            <div className="flex justify-between">
                                <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> 5.00</p>
                                <div className="flex gap-4">
                                    <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                    <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mt-5">
                        <figure>

                            <img className='w-full h-[150px]' src="https://i.ibb.co/85Tr62B/four.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Garmin Venu 2</h2>
                            <p className="font-medium">$ <span className="">850</span></p>

                            <div className="flex justify-between">
                                <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> 4.00</p>
                                <div className="flex gap-4">
                                    <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                    <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mt-5">
                        <figure>

                            <img className='w-full h-[150px]' src="https://i.ibb.co/35bSmGf/4266185-17017.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Amazfit GTR 3</h2>
                            <p className="font-medium">$ <span className="">999</span></p>

                            <div className="flex justify-between">
                                <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> 5.00</p>
                                <div className="flex gap-4">
                                    <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                    <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mt-5">
                        <figure>

                            <img className='w-full h-[150px]' src="https://i.ibb.co/85Tr62B/two.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Fossil Gen 6</h2>
                            <p className="font-medium">$ <span className="">780</span></p>

                            <div className="flex justify-between">
                                <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> 4.50</p>
                                <div className="flex gap-4">
                                    <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                    <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mt-5">
                        <figure>

                            <img className='w-full h-[150px]' src="https://i.ibb.co/FJ6BSy8/7744142-3732605.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Huawei Watch GT 3</h2>
                            <p className="font-medium">$ <span className="">960</span></p>

                            <div className="flex justify-between">
                                <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> 4.00</p>
                                <div className="flex gap-4">
                                    <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                    <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mt-5">
                        <figure>

                            <img className='w-full h-[150px]' src="https://i.ibb.co/0hZykMM/one.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">TicWatch Pro 3 Ultra</h2>
                            <p className="font-medium">$ <span className="">899</span></p>

                            <div className="flex justify-between">
                                <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> 5.00</p>
                                <div className="flex gap-4">
                                    <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                    <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mt-5">
                        <figure>

                            <img className='w-full h-[150px]' src="https://i.ibb.co/fNP4swt/7744148-3732600.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Withings ScanWatch</h2>
                            <p className="font-medium">$ <span className="">999</span></p>

                            <div className="flex justify-between">
                                <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> 3.00</p>
                                <div className="flex gap-4">
                                    <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                    <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl mt-5">
                        <figure>

                            <img className='w-full h-[150px]' src="https://i.ibb.co/85Tr62B/three.jpg" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Suunto 7</h2>
                            <p className="font-medium">$ <span className="">950</span></p>

                            <div className="flex justify-between">
                                <p className="font-medium flex gap-1 items-center text-orange-600"> <span> <FaStar></FaStar> </span> 4.00</p>
                                <div className="flex gap-4">
                                    <FaRegHeart className="text-lg text-orange-600"></FaRegHeart>
                                    <HiOutlineShoppingCart className="text-lg text-orange-600"></HiOutlineShoppingCart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;