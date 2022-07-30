import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import UserRow from './Row/UserRow';

const User = () => {
    
    const {data: users, isLoading , isError} = useQuery(['user'], () =>fetch('http://localhost:5000/user' ,{
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
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;