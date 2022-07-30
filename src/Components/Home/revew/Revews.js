import React from 'react';
import peaple1 from '../../../img/pepole/peapole1.jpg';
import peaple2 from '../../../img/pepole/peapole2.jpg';
import peaple3 from '../../../img/pepole/peapole3.jpg';
import Revew from './Revew';


const Revews = () => {

    const revews=[
        {id:1 , name:"Korim Rohman" , message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptas molestias porro labore repudiandae harum.",img:peaple1},
        {id:2 , name:"Kuddus Rohman" , message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptas molestias porro labore repudiandae harum.",img:peaple2},
        {id:3 , name:"Khalid Rohman" , message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit voluptas molestias porro labore repudiandae harum.",img:peaple3}
    ]

    return (
        <div>
            <h1 className='text-4xl text-center uppercase mt-5 mb-5 py-10 text-primary'>What out client says</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    revews.map(revew =><Revew
                    key={revew.id}
                    revew={revew}
                    ></Revew>)
                }
            </div>
        </div>
    );
};

export default Revews;