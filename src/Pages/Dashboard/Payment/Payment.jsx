import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutform from './CheckOutform';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
    return (
        <div>
            <SectionTitle heading={"payment"} subHeading={"please pay to eat"}></SectionTitle>
            <div className='rounded drop-shadow-lg  p-8 m-10 pt-12'>
               
            <Elements stripe={stripePromise}>
            <CheckOutform></CheckOutform>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;