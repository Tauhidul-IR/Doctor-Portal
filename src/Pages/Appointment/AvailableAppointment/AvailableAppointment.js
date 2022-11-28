import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import Loading from '../../../Share/Loading/Loading';
const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')


    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-psi.vercel.app/appointmentOption?date=${date}`)
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }

    // const { data: appointmentOptions, isLoading } = useQuery({ ------or below
    // const { data: appointmentOptions = [] } = useQuery({
    //     queryKey: ['appointmentOption'],
    //     queryFn: () => fetch('https://doctor-portal-server-psi.vercel.app/appointmentOption')
    //         .then(res => res.json())
    // })


    return (
        <div>
            <div className='text-center my-12'>
                <p className='text-secondary text-lg font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 mb-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption key={option._id} option={option} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {/* modal ------------ */}
            {
                treatment && <BookingModal selectedDate={selectedDate} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>
            }
            {/* modal ------------ */}
        </div>
    );
};

export default AvailableAppointment;