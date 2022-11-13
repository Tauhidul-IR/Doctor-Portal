import React from 'react';
import AppointmentHome from '../AppointmentHome/AppointmentHome';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExceptionalTerm from '../ExceptionalTerm/ExceptionalTerm';
import FormSection from '../FormSection/FormSection';
import Services from '../Services/Services';
import Testimonial from '../Testimonila/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Contact></Contact>
            <Services></Services>
            <ExceptionalTerm></ExceptionalTerm>
            <AppointmentHome></AppointmentHome>
            <Testimonial></Testimonial>
            <FormSection></FormSection>
        </div>
    );
};

export default Home;