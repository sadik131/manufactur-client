import React from 'react';
import UseRevew from '../../Shared/Hook/UseRevew';
import Review from './Review';

const AllRevew = () => {

    const [review] = UseRevew()

    return (
        <div>
            <h1 className="text-3xl text-primary text-center">Our all client Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(result => <Review
                    key={result._id}
                    result={result}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default AllRevew;