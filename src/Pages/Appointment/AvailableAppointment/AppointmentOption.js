import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl py-4" >
                <div className="card-body text-center">
                    <h2 className=" font-bold text-xl text-secondary">{name}</h2>
                    <p className='uppercase'>{slots.length > 0 ? slots[0] : 'Try Another Day.'}</p>
                    <p className='uppercase'>{slots.length} {slots.length <= 2 ? 'Space' : 'Spaces'} Available</p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;