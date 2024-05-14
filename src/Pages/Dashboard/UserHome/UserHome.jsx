import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user}=useAuth();
    return (
        <div>
         <h2 className='text-3xl'>
           <span>Hi Welcome</span> 
         <span className='text-cyan-400'>  {user?.displayName?user.displayName:'Back'}</span>
           </h2> 
        </div>
    );
};

export default UserHome;