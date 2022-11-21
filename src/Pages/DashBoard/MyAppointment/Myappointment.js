import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import {
    useQuery,
} from '@tanstack/react-query'
import Loading from '../../../Share/Loading/Loading';
import { Link } from 'react-router-dom';

const Myappointment = () => {
    const { user, loading } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`;


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log('boooooooooooooo', bookings)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='mb-5'>My Appointment</h3>
            <div className="overflow-x-auto ">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking?.price && !booking?.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary btn-sm'>
                                                    Pay
                                                </button>
                                            </Link>
                                        }
                                        {
                                            booking?.price && booking?.paid && <span className='text-primary'>Paid</span>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myappointment;