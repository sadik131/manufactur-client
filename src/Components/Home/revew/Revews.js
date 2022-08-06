import React from 'react';
import Revew from './Revew';
import { Link } from 'react-router-dom';
import UseRevew from '../../Shared/Hook/UseRevew';

const Revews = () => {

    const [review] = UseRevew()
    
    return (
        <div>
            <h1 className='text-4xl text-center uppercase mt-5 mb-5 py-10 text-primary'>What out client says</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    review.slice(0,3).map(revew => <Revew
                        key={revew._id}
                        revew={revew}
                    ></Revew>)
                }
            </div>
            {review && <div><Link className='cursor-pointer underline text-blue-600' to='/allrating'>See More</Link></div>}
        </div>
    );
};

export default Revews;