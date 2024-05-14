import React from 'react';
import { FaBook, FaEnvelope, FaHistory, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin]=useAdmin();
    console.log(isAdmin)
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <h3 className='uppercase ml-8 mt-6 font-bold'>bistro boss</h3>
                <p className='ml-8 tracking-wider'>resturant</p>
                <ul className='menu font-bold uppercase mt-4'>
                  {
                    isAdmin ? <>
 <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                    </>:<>
                    <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymentHistory">
                                    <FaHistory></FaHistory>
                                    paymentHistory</NavLink>
                            </li>
                    </>
                  }
                             {/* shared nav links */}
                <div className="divider"></div>
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/orders/salad">
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                </li>
              
                <li>
                    <NavLink to="/orders/contact">
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                </li>
                <li>
                <NavLink to="/dashboard/paymentHistory">
                    <FaHistory></FaHistory>
                    paymentHistory</NavLink>
                            </li>
                </ul>
            </div>
            <div className='flex-1'>
            
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;