import React from 'react';

const People = ({ people }) => {
    const { location, img, details, name } = people;
    console.log(details)
    return (
        <section className='my-10'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{details}</p>
                    <div className="card-actions justify-start">
                        <div className='flex justify-center items-center mt-4'>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img alt='' src={img} />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl'>{name}</h2>
                                <h4>{location}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default People;