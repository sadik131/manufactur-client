import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {  toast } from 'react-toastify';


const Booking = ({ product, number , setBooking}) => {

    const [user] = useAuthState(auth);
    
    const { name, price } = product

    const total = () => {
        const Number = parseInt(number)
        const Price = parseInt(price)
        const totalPrice = Number * Price

        return totalPrice
    }
    const subTotal = total()

    const handelFormSubmit = (e) =>{
        e.preventDefault()
        console.log();
        const info ={
            name:e.target.name.value,
            email:e.target.email.value,
            number:e.target.number.value,
            address:e.target.address.value,
            price: subTotal,
            totalItem: number
        }
        
        fetch('http://localhost:5000/product' ,{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(info)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setBooking(null)
            toast("Your Product parcess successfully chack on Dhashbord")
        })
    }

    return (
        <div>
            <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <div className='flex justify-between'>
                        <h1 className='text-xl'>price</h1>
                        <h1 className='text-xl'>{price}</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1 className='text-xl'>item</h1>
                        <h1 className='text-xl'>{number}</h1>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-semibold'>Subtotal</h1>
                        <h1 id='#total' className='text-xl font-semibold'>{subTotal}</h1>
                    </div>
                    <form onSubmit={handelFormSubmit}>
                    <input type="text" name='name' value={user.displayName} disabled className="input mt-5 input-bordered input-accent w-full " />
                    <input type="text" name='email' value={user.email}  disabled className="input input-bordered mt-5 input-accent w-full " />
                    <input type="number" name='number' placeholder="Enter Your Phon Number" className="input mt-5 input-bordered input-accent w-full " />
                    <input type="text" name='address' placeholder="Enter Your Adderss" className="input mt-5 input-bordered input-accent w-full " />
                    <input type="submit" value="Submit" className='btn btn-primary w-full mt-5' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Booking;