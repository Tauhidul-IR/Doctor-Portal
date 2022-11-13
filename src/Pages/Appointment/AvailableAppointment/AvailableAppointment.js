import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentList.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

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
                treatment && <BookingModal selectedDate={selectedDate} treatment={treatment} setTreatment={setTreatment}></BookingModal>
            }
            {/* modal ------------ */}
        </div>
    );
};

export default AvailableAppointment;