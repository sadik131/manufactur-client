import React from 'react';
import UseProduct from '../../Shared/Hook/UseProduct';
import Product from './Product';

const Products = () => {
    
    const [tools, setTools] = UseProduct()
    console.log(tools);
    return (
        <div>
            <h1 className="text-5xl text-primary text-center uppercase">Our All Products</h1>
            <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    tools.map(tool => <Product
                        key={tool._id}
                        tool={tool}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;