import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import UserRow from './Row/UserRow';

const User = () => {
    
    const {data: users, isLoading  , refetch} = useQuery(['user'], () =>fetch('https://lit-harbor-16430.herokuapp.com/user' ,{
        method:"GET",
        headers:{
            "authorization" : `Bearer ${localStorage.getItem("accessToken")}`
        },
    }).then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-auto">
                <h1 className="text-2xl text-primary">Our total use: {users.length}</h1>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user , index)=><UserRow
                            key={index}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;