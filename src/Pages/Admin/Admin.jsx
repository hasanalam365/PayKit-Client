import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Admin = () => {
    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleRoleChange = (user) => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Make Admin",
            denyButtonText: `Make User`
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */

            // const makeAdmin = user.role === 'admin' ? 'user' : 'admin'
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(`/users/admin/${user._id}`, { role: 'admin' })
                if (res.data.modifiedCount === 1) {
                    refetch()
                    // Swal.fire("Saved Admin!", "", "success");
                }

            } else if (result.isDenied) {
                const res = await axiosSecure.patch(`/users/admin/${user._id}`, { role: 'user' })
                if (res.data.modifiedCount === 1) {
                    refetch()
                    // Swal.fire("Saved Admin!", "", "success");
                }
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Photo</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Money</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>

                                <td>
                                    <div className="flex items-center gap-3">

                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>


                                    </div>
                                </td>
                                <td>
                                    {user.name}

                                </td>
                                <td>{user.phone}</td>
                                <th>
                                    <button onClick={() => handleRoleChange(user)} className="btn btn-ghost btn-xs">Actions</button>
                                </th>
                                <td>
                                    {user.role}

                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Admin;