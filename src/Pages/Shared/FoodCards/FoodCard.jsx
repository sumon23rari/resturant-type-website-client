import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';

const FoodCard = ({food}) => {
  const {user}=useAuth();
  const [,refetch]=useCart();
  const axiosSecure=useAxiosSecure();
  const location=useLocation();
  const navigate=useNavigate();
    const {image,name,price,_id}=food;
    const handleAddCart=()=>{
      if (user && user?.email) {
        const cartItem={
          menuId:_id,
          email:user?.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then((res)=>{
          if (res.data.insertedId) {
            Swal.fire({
              title: "success!",
              text: "You cart add successfully!",
              icon: "success"
            });
            refetch(); 
          }
         
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      else{
        Swal.fire({
          title: "You are not logged In",
          text: "please logIn to add this cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logIn!"
        }).then((result) => {
          if (result.isConfirmed) {
       navigate('/logIn',{state:{from:location}})
          }
        });
      }
    
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='relative'>
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        
        </figure>
        <span className='absolute top-[25%] right-[15%] bg-black text-white p-2 rounded'>${price}</span>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-outline text-[#BB8506]  border-0 border-[#BB8506] hover:text-[#BB8506] border-b-4 uppercase font-bold" onClick={handleAddCart}>Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;