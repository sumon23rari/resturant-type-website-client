import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const [isAdmin]=useAdmin();
const [cart]=useCart()
  console.log('cart',cart)
    const navOption=<>
    <li className='mr-3 font-bold upercase '><NavLink to="/" className="!bg-transparent">home</NavLink></li>
    <li className='mr-3 font-bold upercase '><NavLink to="/" className="!bg-transparent">contact-us</NavLink></li>
    <li className='mr-3 font-bold upercase '><NavLink to="/dashboard/cart" className="!bg-transparent">dashboard</NavLink></li>
  {
    user && isAdmin &&  <li className='mr-3 font-bold upercase '><NavLink to="/dashboard/adminHome" className="!bg-transparent">dashboard</NavLink></li>
  }
  {
    user && !isAdmin &&  <li className='mr-3 font-bold upercase '><NavLink to="/dashboard/userHome" className="!bg-transparent">dashboard</NavLink></li>
  }

    <li className='mr-3 font-bold upercase '><NavLink to="/menu" className="!bg-transparent">our menu </NavLink></li>
    <li className='mr-3 font-bold upercase '><NavLink to="/orders/salad" className="!bg-transparent">our shop</NavLink></li>
    <li className="mr-3 font-bold upercase"><NavLink to="">
    <button className="flex">
<FaShoppingCart className='mr-3'/>
  <div className="badge badge-secondary badge-xs">{cart.length} +00</div>
</button>
      </NavLink></li>
  
    </>
    const handleLogOut=()=>{
      logOut()
      .then(() => {
      
        Swal.fire({
          title: "Deleted!",
          position: "mdiddle",
          text: " user role  has been updated.",
          icon: "success",
           timer: 1500
        }); 
      }).catch((error) => {
        // An error happened.
      });
    }
    return (
        <>
       
        <div className=' bg-black text-white sticky top-0 z-20'>
         <div className="navbar max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">{user?.displayName}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    {user?<button className='btn btn-ghost' onClick={handleLogOut}>logOut</button>:<Link to="/logIn">logIn</Link>}
  </div>
</div>   
        </div>
      
        </>
    );
};

export default Navbar;