import React, { useState } from 'react';
import chairIMG from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import './appointmentBanner.css'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header>
            <div>
                <div className="hero appointmentBanner">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <img src={chairIMG} className=" rounded-lg shadow-xl max-w-lg lg:w-1/2 w-full" alt='dentist chair' />

                        <div>
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>

                        </div>
                    </div>


                </div>
            </div>

        </header>
    );
};

export default AppointmentBanner;