import React from 'react';

const Revew = ({revew}) => {
    const {name , message , img} = revew
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt={name} />
                            </div>
                        </div>
                        <h1 className='text-xl font-normal ml-5'>{name}</h1>
                    </div>
                    <p className="text-base">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Revew;