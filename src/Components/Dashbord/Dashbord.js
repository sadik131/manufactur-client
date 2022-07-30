import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
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
                        <li><Link to='/dashbord/order'>My Order List</Link></li>
                        <li><Link to='/dashbord/user'>All User</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;