import React from 'react';
import img from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../../component/PrimaryBtn/PrimaryBtn';

const ExceptionalTerm = () => {
    return (


        <section>
            <div className="hero my-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt='' className="lg:w-1/3 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalTerm;