import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');


const Payment = () => {
    const [paymet, setPayment] = useState({})
    const { id } = useParams()

    fetch(`http://localhost:5000/payment/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
        .then(res => res.json())
        .then(data => setPayment(data))

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-primary">Hello {paymet.name}</h2>
                    <h2 class="card-title">Pay for : {paymet.productName}</h2>
                    <p>We will send you <span className='text-primary'>{paymet.productName}</span> product in 4 or 7 days . Thank you for being with us</p>
                    <p className=''>Please pay : ${paymet.price}</p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;