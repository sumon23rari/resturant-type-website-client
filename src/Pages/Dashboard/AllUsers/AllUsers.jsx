import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure=useAxiosSecure();
    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/user');
            return res.data;
        }
    })
    const handleMakeAdmin=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You update this role user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
          })
          .then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/:${id}`)
                .then((res)=>{
                    if (res.data.modifiedCount>0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            position: "mdiddle",
                            text: " user role  has been updated.",
                            icon: "success",
                             timer: 1500
                          }); 
                    }
                })
            
            }
          });
  
    }
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${id}`)
                .then((res)=>{
                    if (res.data.deletedCount>0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            position: "mdiddle",
                            text: "Your file has been deleted.",
                            icon: "success",
                             timer: 1500
                          }); 
                    }
                })
            
            }
          });

     
       


    }
    return (
        <div>
            <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"}></SectionTitle>
            <div className='rounded drop-shadow-lg p-8 m-10 bg-white min-h-screen'>
                <h3 className='font-bold text-xl uppercase'>total user: {users.length}</h3>
                <div className="overflow-x-auto mt-4">
  <table className="table">
    {/* head */}
    <thead className='font-bold text-xl bg-orange-400 text-white rounded'>
      <tr>
        <th></th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
   
{
    users.map((user,index)=><tr className="hover" key={user._id}>
        <td>{index+1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{
            user?.role==='admin'?'Admin':<button className='w-[40px] h-[40px] bg-[#D1A054] rounded flex justify-center items-center' onClick={()=>handleMakeAdmin(user._id)}> <FaUsers className='text-white font-bold text-xl' /></button>
            }</td>
        <td><button className='w-[40px] h-[40px] bg-[#B91C1C] rounded flex justify-center items-center' onClick={()=>handleDelete(user._id)}> <FaTrash className='text-white font-bold text-xl' /></button></td>
    </tr>)
}
    
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllUsers;