import React from 'react';

const ChackOut = ({product}) => {
    const {name , price} = product
    return (
        <div className='flex '>
            <div className='w-3/5 bg-slate-500'>

            </div>
            <div className='bg-slate-400 w-2/5'>
                <h1 className='text-2xl'>{name}</h1>
            </div>
        </div>
    );
};

export default ChackOut;