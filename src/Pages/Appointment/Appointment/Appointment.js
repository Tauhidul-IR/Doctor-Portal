import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner setSelectedDate={setSelectedDate} selectedDate={selectedDate}></AppointmentBanner>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>

        </div>
    );
};

export default Appointment;