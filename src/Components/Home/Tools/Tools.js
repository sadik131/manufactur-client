import React, { useEffect, useState } from 'react';
import Tool from './Tool';
import { Link } from 'react-router-dom';

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    // const [tools] = UseTool()
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
            <Link to="/product" className='text-blue-600 cursor-pointer underline text-center'>See More</Link>
        </div>
    );
};

export default Tools;