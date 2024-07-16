import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {

    const axiosPublic = useAxiosPublic()
    const [errorText, setErrorText] = useState('')


    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const password = form.password.value
        const email = form.email.value
        const role = 'user'
        const action = 'active'
        const status = 'pending'

        if (password.length !== 5) {
            return setErrorText('Password can use minimum and maximum 5 digits')
        }

        const userInfo = { name, phone, password, email, role, action, status }

        const res = await axiosPublic.post('/users', userInfo)
        console.log(res.data)


    }

    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div>
                    <h3 className="mt-10 font-bold text-3xl">Register</h3>
                </div>
                <div className="card bg-base-100 w-2/3 md:w-1/2  shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                name="name" placeholder="Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder="Phone Number"
                                name='phone' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="number" placeholder="Password"
                                name='password' className="input input-bordered" onInput={(e) => {
                                    if (e.target.value.length > 5) {
                                        e.target.value = e.target.value.slice(0, 5);
                                    }
                                }} required />
                            <p className="text-red-600">{errorText}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email"
                                name='email' className="input input-bordered" required />


                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;