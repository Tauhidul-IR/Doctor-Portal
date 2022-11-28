import React from 'react';
import { useQuery, } from '@tanstack/react-query'
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-server-psi.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });



    const handleMakeUpdate = id => {
        fetch(`https://doctor-portal-server-psi.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully')
                    refetch();
                }
            })
    }



    return (
        <div>
            <h2 className="text-2xl">ALl User</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role !== 'admin' &&
                                    <button onClick={() => handleMakeUpdate(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>
                                }</td>
                                <td><button className='btn btn-primary'>X</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;