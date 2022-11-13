import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Contact = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {/* ---------------------OPENING HOUR---------------------- */}
                <div className='flex flex-row justify-center items-center btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mx-w-[450px] h-48'>
                    <div className='justify-center items-center '>
                        <img src={clock} alt="" />
                    </div>
                    <div className='text-white text-left ml-3'>
                        <h1 className='text-xl mb-2'>Opening Hours</h1>
                        <p>Opne 9.00 AM to 8.00 PM</p>
                    </div>
                </div>
                {/* -----------------LOCATION--------------- */}
                <div className='btn btn-primary bg-neutral  text-white w-full h-48 flex flex-row justify-center items-center'>
                    <div className='justify-center items-center '>
                        <img src={marker} alt="" />
                    </div>
                    <div className='text-white text-left ml-3'>
                        <h1 className='text-xl mb-2'>Visit our location</h1>
                        <p>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                {/* --------------------CONTACT----------------- */}
                <div className='btn btn-primary flex flex-row justify-center items-center bg-gradient-to-r from-primary to-secondary text-white w-full h-48'>
                    <div className='justify-center items-center '>
                        <img src={phone} alt="" />
                    </div>
                    <div className='text-white text-left ml-3'>
                        <h1 className='text-xl mb-2'>Contact us now</h1>
                        <p>+000 123 456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;