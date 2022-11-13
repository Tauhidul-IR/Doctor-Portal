import React from 'react';
import img1 from '../../../assets/images/fluoride.png'
import img2 from '../../../assets/images/cavity.png'
import img3 from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const services = [
        {
            name: 'Fluoride Treatment',
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: img1
        },
        {
            name: 'Cavity Filling',
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: img2
        },
        {
            name: 'Teeth Whitening',
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: img3
        },
    ]
    return (
        <div className='text-center mt-12'>
            <div className='my-10'>
                <h1 className='text-primary text-xl font-bold'>Our Services</h1>
                <h2 className='text-4xl'>Service We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;