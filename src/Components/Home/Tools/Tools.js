import React from 'react';
import Tool from './Tool';
import { Link } from 'react-router-dom';
import UseProduct from '../../Shared/Hook/UseProduct';

const Tools = () => {
    
    const [tools, setTools] = UseProduct()
    return (
        <div>
            <h1 className="text-2xl mb-10 text-center">Our tools</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    tools.slice(0, 3).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            {tools && <Link to="/products" className='text-blue-600 cursor-pointer underline text-center'>See More</Link>}
        </div>
    );
};

export default Tools;