import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutform = () => {
    const stripe=useStripe();
    const elements=useElements();
    const axiosSecure=useAxiosSecure();
    const [clientSecret,setClientSecret]=useState('');
    const [transactionId,setTransactionId]=useState('');
    const [cart,refetch]=useCart();
    const {user}=useAuth();
    const navigate=useNavigate();
    const [error,setError]=useState('');
    const totalPrice=cart.reduce((previewsValue,currentValue)=>{
        return previewsValue+currentValue.price;
    },0);
  
    useEffect(()=>{
      if (totalPrice>0) {
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then((res)=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
      }
      
    },[axiosSecure,totalPrice])
    const handleSubmit=async (event)=>{
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card=elements.getElement(CardElement);
        if (card===null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if (error) {
            console.log('payment error',error)
            setError(error.message)
        }
    else {
            console.log('payment method',paymentMethod)
            setError('')
        }
        // confirm payment
        const { paymentIntent, error: confirmError }=await stripe.confirmCardPayment(clientSecret,
          {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('card error',confirmError)
        } else {
           console.log(paymentIntent, 'paymentIntent') 
           if (paymentIntent.status==='succeeded') {
          
            setTransactionId(paymentIntent.id)
              // now save the payment in the database
              const payment={
                email:user.email,
                price:totalPrice,
                transactionId:paymentIntent.id,
                data:new Date(), //utc date convert using moment js
                cartIds:cart.map((item)=>item._id),
                menuItemIds:cart.map((item)=>item.menuId),
                status:'pending'
              }
              const res=await axiosSecure.post('/payments',payment)
              console.log(res?.data,'delete and insert')
              refetch()
              if ((res.data?.paymentResult?.insertedId)) {
                Swal.fire({
                  position: "middle",
                  icon: "success",
                  title: "Thank you for the taka paisa",
                  showConfirmButton: false,
                  timer: 1500
              });
              navigate('/dashboard/paymentHistory')
              }
           }
         
        }
    }
    return (
       <form onSubmit={handleSubmit}>
       <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-primary my-4' disabled={!stripe || !clientSecret}>
        Pay
      </button>
<p className='text-red-600'>{error}</p>
{
    transactionId && <p className='text-grey-600'>your transactionId id : {transactionId}</p>
}
       </form>
    );
};

export default CheckOutform;