import axios from "axios";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('access-token')

        config.headers.authorization = `Bearer ${token}`

        return config
    }, function (error) {
        return Promise.reject(error)
    })

    //interceptors 401 and 403 status

    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, (error) => {
        const status = error.response.status
        console.log('status', error)

        if (status === 401 || status === 403) {

            localStorage.removeItem('access-token')
            localStorage.removeItem('user-email')
            navigate('/login')
        }

        return Promise.reject(error)

    })


    return axiosSecure
};

export default useAxiosSecure;