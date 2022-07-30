
import React from 'react';
import background from '../../../img/backgrount/download.jpg'

const Summary = () => {
    return (
        <div style={{
            background:`url(${background})`,
            opacity:"0.5px"
        }}>
            <h1 className="text-5xl text-center mt-10 text-primary uppercase font-bold">millions bussens trust us</h1>
            <p className='text-xl text-gray-500 text-center'>Try to Understent User Exprence</p>
            

        </div>
    );
};

export default Summary;