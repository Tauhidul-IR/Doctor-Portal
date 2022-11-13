import React from 'react';
import './Banner.css'
import chairIMG from '../../../assets/images/chair.png'
import PrimaryBtn from '../../../component/PrimaryBtn/PrimaryBtn';

const Banner = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse banner">
                    <img src={chairIMG} className=" rounded-lg shadow-xl max-w-xl w-full" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;