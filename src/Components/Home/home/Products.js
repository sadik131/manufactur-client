import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl text-primary text-center uppercase">Our All Products</h1>
            <div className="grid gap-5 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    Products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;