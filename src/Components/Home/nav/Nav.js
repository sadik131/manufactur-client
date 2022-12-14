import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from "react-router-dom";
import auth from '../../../firebase.init';

const Nav = () => {
  const [user] = useAuthState(auth)
  const {pathname} = useLocation()
  
  const handelSingout = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }

  const navlink = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="">Blog</Link></li>
    {user ?
      <>
        <li><Link to="/dashbord">Dashbord</Link></li>
        <li><Link onClick={handelSingout} to="/login">Signout</Link></li>
      </>
      :
      <li><Link to="/login">Login</Link></li>}
  </>

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navlink}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Manufacturing</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
        {pathname.includes('/dashbord') && <label htmlFor="my-drawer-2" className='lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </label>}
      </div>
    </div>
  );
};

export default Nav;