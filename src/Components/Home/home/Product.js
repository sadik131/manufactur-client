import React from 'react';

const Product = ({  tool }) => {
    const { name, img, discription, price } = tool

    const handelProduct = (product) =>{
        console.log(product);
    }
    return (
        <div className="card w-full  bg-base-100 shadow-xl">
            <img src={img} alt={name} />
            <div className="card-body">
                <h2 className="text-center text-2xl">{name}</h2>
                <p className='text-base text-center'>{discription}</p>
                <p className='text-xl font-medium text-center'>price: ${price}</p>
                <div className="card-actions justify-center">
                    <button onClick={() =>handelProduct(tool)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;