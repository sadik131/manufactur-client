import React from 'react';
import { useNavigate } from "react-router-dom";


const Tool = ({ tool }) => {
    const { name, img, discription , price , _id} = tool
    const navigate = useNavigate()

    const handelProduct = id =>{
        navigate(`/sProduct/${id}`)
    }

    return (
        <div className="card w-full  bg-base-100 shadow-xl">
            <img src={img} alt={name} />
            <div className="card-body">
                <h2 className="text-center text-2xl">{name}</h2>
                <p className='text-base text-center'>{discription}</p>
                <p className='text-xl font-medium text-center'>price: ${price}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handelProduct(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;