import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../Share/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    //router a loader use korle loading add korar jonno
    // const navigation = useNavigation();
    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }
    console.log(booking);
    return (
        <div>
            <h2 className='text-3xl'>Payment for {booking?.treatment}</h2>
            <p className='text-xl'>Please pay <strong>${booking?.price}</strong> for your Appointment at {booking?.slot}</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;