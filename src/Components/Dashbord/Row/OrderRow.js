import React from 'react';

const OrderRow = ({ order, index }) => {

    const { productName, totalItem, price } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{totalItem}</td>
            <td>{price}</td>
            <td>Pay</td>
            <td>
                <button class="btn btn-xs">Pay</button>
            </td>
            <td>
                <button class="btn btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default OrderRow;