import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index , refetch}) => {
    const {_id, email , roll} = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:"PATCH",
            headers:{
                "authorization" : `Bearer ${localStorage.getItem("accessToken")}`
            },
        })
        .then(res =>res.json())
        .then(data =>console.log(data))
    };

    const DeleteUser = id =>{
        fetch(`http://localhost:5000/delete/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast("User delete Successfully")
            refetch()
        })
        
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {roll !=="admin" && <button onClick={makeAdmin} className="btn btn-sm">Admin</button>}
            </td>
            <td><button onClick={() =>DeleteUser(_id)} className="btn btn-sm">x</button>
            </td>
        </tr>
    );
};

export default UserRow;