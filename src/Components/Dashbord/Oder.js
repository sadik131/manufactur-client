import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './Row/OrderRow';

const Order = () => {
    const [user] = useAuthState(auth);
    const email = user?.email

    const { data: orders, isLoading } = useQuery(['order'], () => fetch(`https://lit-harbor-16430.herokuapp.com/order?user=${email}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className="text-2xl">My order List : {orders?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Order Details</th>
                            <th>Payment</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                            ></OrderRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;