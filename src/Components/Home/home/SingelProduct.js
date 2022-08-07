import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Booking from './Booking';


const SingelProduct = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [booking, setBooking] = useState(null)

    useEffect(() => {
        fetch(`https://lit-harbor-16430.herokuapp.com/tool/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    

    const [number, setNumber] = useState(1)
    const [error, setError] = useState('')

    const handelIncrise = () => {
        setNumber(number + 1)
    };

    const handelDicrise = () => {
        setNumber(number - 1)
    };

    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='md:flex-1 lg:flex'>
                    <div className='md:w-full lg:w-1/2'>
                        <img className='rounded-lg flex-1' src={product.img} alt="" />
                    </div>
                    
                    <div className=' md:w-full text-center lg:text-left w-1/2 ml-5'>
                        <h2 className="lg:text-2xl font-semibold">Product Name: {product.name}</h2>
                        <h2 className="text-2xl text-gray-500 font-bold">Price: ${product.price}</h2>
                        <h2 className="md:text-xl ">{product.discription}</h2>
                        <div className='flex justify-between items-center'>

                            <div className='flex justify-between items-center border border-purple-400 w-24 h-7 '>
                                <p onClick={handelDicrise} className='flex justify-center h-full bg-purple-500 cursor-pointer text-white'>-</p>
                                <p className='ml-3'>{number}</p>
                                <p onClick={handelIncrise} className='flex justify-center h-full bg-purple-500 cursor-pointer text-white'>+</p>

                            </div>
                            <label onClick={() =>setBooking(product)} htmlFor="Booking-Modal" className="btn modal-button">Booking Now</label>
                            
                        </div>
                    </div>
                </div>
                {booking && <Booking setBooking={setBooking} product={product} number={number}></Booking>}
            </div>
        </div>
    );
};

export default SingelProduct;