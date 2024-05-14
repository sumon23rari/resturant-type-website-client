import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
const Cart = () => {
    const [cart,refetch]=useCart();
    const axiosSecure=useAxiosSecure();
    const totalPrice=cart.reduce((previewsValue,currentValue)=>{
        return previewsValue+currentValue.price;
    },0)
 const handleDelete=(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
   axiosSecure.delete(`/carts/${id}`)
   .then((res)=>{
    if (res.data.deletedCount>0) {
      refetch()
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      })
    }

  
    console.log(res)
   })
   .catch(()=>{
    
   })
    }
  });
 }
    return (
        <div>
          
            <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"}></SectionTitle>
            <div className='rounded drop-shadow-lg p-8 m-10 bg-white min-h-screen'>
              <div className='flex justify-between '>
                <h3 className='font-bold text-xl uppercase'>total orders:{cart.length}</h3>
                <h3 className='font-bold text-xl uppercase'>total price:{totalPrice}</h3>
        <div>
            {
              cart.length ? <Link to={`/dashboard/payment`}><buton className="btn bg-orange-400">pay</buton></Link>:
              <buton disabled className="btn bg-orange-400">pay</buton>
            }
        </div>
              </div>
              <div className="overflow-x-auto mt-4">
  <table className="table">
    {/* head */}
    <thead className='font-bold text-xl bg-orange-400 text-white rounded'>
      <tr>
        <th></th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
   
{
    cart.map((item,index)=><tr className="hover">
        <td>{index+1}</td>
        <td><img src={item.image} alt="image" className='w-[75px] h-[75px] rounded'/></td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td><button className='w-[50px] h-[50px] bg-[#B91C1C] rounded flex justify-center items-center' onClick={()=>handleDelete(item._id)}> <FaTrash className='text-white font-bold text-xl' /></button></td>
    </tr>)
}
    
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Cart;