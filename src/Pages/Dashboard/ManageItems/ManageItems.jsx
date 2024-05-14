import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const ManageItems = () => {
  
    const [menu,refetch,loading]=useMenu();
    const axiosSecure=useAxiosSecure();
    const handleDelete=(item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }) .then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    if (loading) {
                      return <h3>loading</h3>
                    }
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
   
  
  
    return (
        <div>
          <SectionTitle heading={"hurry up"} subHeading={"manage all items"}></SectionTitle>
          <div className='rounded drop-shadow-lg  p-8 m-10 bg-[#E8E8E8] min-h-screen'>
            <h3 className='uppercase font-bold text-xl py-3'>total items {menu.length}</h3>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='font-bold text-xl bg-orange-400 text-white rounded'>
      <tr>
        <th>sl_No</th>
        <th>Item_Image</th>
        <th>ItemName</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
menu.map((item,index)=><tr className='hover' key={index}>
    <td>{index+1}</td>
 <td>
 <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
 </td>
 <td>{item.name}</td>
 <td>

 <Link to={`/dashboard/updateItem/${item._id}`} className='w-[40px] h-[40px] bg-[#B91C1C] rounded flex justify-center items-center' ><FaEdit className='text-white font-bold text-xl' /></Link>

 </td>
 <td><button className='w-[40px] h-[40px] bg-[#B91C1C] rounded flex justify-center items-center' onClick={()=>handleDelete(item)}> <FaTrash className='text-white font-bold text-xl' /></button></td>
</tr>)}
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;