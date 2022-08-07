import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Review = ({ result }) => {

    const { name, message, img, review } = result
    console.log(name);
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <h1 className='text-xl font-normal ml-5'>{name}</h1>
                </div>
                <p className="text-base ">{message}</p>
                <ReactStars
                    count={5}
                    value={review}
                    size={30}
                    edit={false}
                    activeColor="#ffd700"
                />,
            </div>
        </div>
    );
};

export default Review;