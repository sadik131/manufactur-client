import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Order = () => {
    const [user] = useAuthState(auth);
    const email = user?.email

    const { data: order, isLoading } = useQuery(['order'], () => fetch(`http://localhost:5000/order?user=${email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className="text-2xl">My order List : {order?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;