import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = ({ order, index }) => {
    const navigate = useNavigate()

    const paymentPage = ( id ) =>{
        // navigate(`/dashbord/payment/${id}`)
    }

    const { productName, totalItem, price , _id } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{totalItem}</td>
            <td>{price}</td>
            <td>Pay</td>
            <td>
                {price && <button onClick={() =>paymentPage(_id)} className="btn btn-xs">Pay</button>}
                {!price && <button onClick={() =>paymentPage(_id)} className="btn btn-xs">Paid</button>}
            </td>
            <td>
                <button className="btn btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default OrderRow;