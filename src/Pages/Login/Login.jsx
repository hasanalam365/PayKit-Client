import { useState } from "react"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const axiosPublic = useAxiosPublic()
    const [errorText, setErrorText] = useState('')

    const [checkPhone, setCheckPhone] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const navigate = useNavigate()



    const handleLogin = async (e) => {
        e.preventDefault()


        const res = await axiosPublic.get(`/user/${checkPhone}/${checkPassword}`)

        // console.log(res.data)

        try {
            if (!res.data) {
                localStorage.removeItem('access-token')
            }
            else {

                const userInfo = { email: res.data.email }

                const res2 = await axiosPublic.post('/jwt', userInfo)
                if (res2.data.token) {
                    localStorage.setItem('access-token', res2.data.token)

                    navigate('/home')
                }
            }
        }
        catch {
            console.log('something is wrong')
        }
        // if (!res.data._id) {
        //     alert('wrong phone/password')
        // }
        // else {
        //     navigate('/home')
        // }

    }


    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div>
                    <h3 className="mt-10 font-bold text-3xl">Login</h3>
                </div>
                <div className="card bg-base-100 w-2/3 md:w-1/2  shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder="Phone Number"
                                onChange={(e) => setCheckPhone(e.target.value)}
                                name='phone' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="number" placeholder="Password"
                                name='password' className="input input-bordered" onChange={(e) => setCheckPassword(e.target.value)} onInput={(e) => {
                                    if (e.target.value.length > 5) {
                                        e.target.value = e.target.value.slice(0, 5);
                                    }
                                }} required />
                            <p className="text-red-600">{errorText}</p>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 