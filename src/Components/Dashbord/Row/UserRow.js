import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index , refetch}) => {
    const {_id, email , roll} = user

    const makeAdmin = () => {
        fetch(`https://lit-harbor-16430.herokuapp.com/user/admin/${email}`,{
            method:"PATCH",
            headers:{
                "authorization" : `Bearer ${localStorage.getItem("accessToken")}`
            },
        })
        .then(res =>res.json())
        .then(data =>{
            toast('Use make admin Successfully')
        })
    };

    const DeleteUser = id =>{
        fetch(`https://lit-harbor-16430.herokuapp.com/delete/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
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