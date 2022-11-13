import React from 'react';
import qouteImg from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import People from './People';

const Testimonial = () => {

    const testimonialPeoples = [
        {
            name: 'Winson Herry',
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: "California"
        },
        {
            name: 'Winson Herry',
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            location: "California"
        },
        {
            name: 'Winson Herry',
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            location: "California"
        },
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-xl font-bold text-primary font-bold">Appointment</h1>
                    <h2 className='text-4xl text-black'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={qouteImg} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                {
                    testimonialPeoples.map(people => <People people={people}></People>)
                }
            </div>

        </section>
    );
};

export default Testimonial;