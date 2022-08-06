import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Shared/Hook/UseAdmin';

const Dashbord = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='order'>My Order List</Link></li>
                        {admin && <>
                            <li><Link to='user'>All User</Link></li>
                            <li><Link to='addProduct'>Add Product</Link></li>
                        </>
                        }
                        <li><Link to='profile'>My Profile</Link></li>
                        <li><Link to='revew'>Add Revew</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;