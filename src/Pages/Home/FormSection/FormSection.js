import React from 'react';
import PrimaryBtn from '../../../component/PrimaryBtn/PrimaryBtn';
import bgImg from '../../../assets/images/appointment.png'

const FormSection = () => {
    return (
        <section style={{ background: `url(${bgImg})` }} className='py-20'>
            <div>
                <div className='text-center'>
                    <h1 className="text-xl  text-primary font-bold">Contact Us</h1>
                    <h2 className='text-4xl text-black'>Stay connected with us Says</h2>
                </div>

                <div className='flex justify-center items-center mt-10'>
                    <form className=''>
                        <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 '>
                            <input type="text" name='name' placeholder="Email Address" className="input input-bordered    sm:w-[450px] " />
                            <input type="text" name='name' placeholder="Subject" className="input input-bordered     sm:w-[450px] " />

                            <textarea name='message' className="textarea sm:w-[450px] my-4 h-60" placeholder="Your Message"></textarea>
                            <PrimaryBtn>Submit</PrimaryBtn>
                        </div>
                    </form>
                </div>




            </div >

        </section >
    );
};

export default FormSection;