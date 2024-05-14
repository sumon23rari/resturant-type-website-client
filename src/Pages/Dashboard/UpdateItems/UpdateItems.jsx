import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
const import_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api=`https://api.imgbb.com/1/upload?expiration=600&key=${import_hosting_key}`
const UpdateItems = () => {
    const item=useLoaderData();
    console.log(item,'dfsdlfsd;')
    const{name,category,price, recipe,image,_id}=item;
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
      const axiosPublic=useAxiosPublic();
const axiosSecure=useAxiosSecure();
const onSubmit = async(data) => {
    // image upload to imgbb and then get an url
    console.log(data)
    const imageFile={image:data.images[0]}
    const res=await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
    console.log('dedd',res.data?.success)
    if (res.data.success) {
      const menuItem={
        name:data.name,
        category:data.category,
        price:parseFloat(data.price), 
        recipe:data. recipe,
        image:res.data.data.display_url
      }
      console.log(menuItem,'menuiaidfo')
      const menuRes=await axiosSecure.patch(`/menu/${_id}`,menuItem)
     if (menuRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "middle",
        icon: "success",
        title: `your ${data.name} item update successfully`,
        showConfirmButton: false,
        timer: 1500
      });
  reset();
     }
    console.log(menuItem)
    }
  };
    return (
        <div>
    <SectionTitle heading={'refresh info'} subHeading={'update an items'}></SectionTitle>
    <div className='rounded drop-shadow-lg  p-8 m-10 bg-[#E8E8E8] min-h-screen'>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe Name</span>
                </label>
                <input type='text' defaultValue={name} placeholder='items name' className='px-3 py-3 rounded' {...register("name", { required: true })} />
                {errors.name && <span className='text-red '>name is required</span>}
              </div>
              <div className='flex justify-between gap-[26px]'>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
       
                <select defaultValue={recipe} className="select select-bordered"  {...register("category")}>
    <option disabled value="default">select a category</option>
    <option value="salad">Salad</option>
    <option value="pizza">Pizza</option>
    <option value="soup">Soup</option>
    <option value="desert">Desert</option>
    <option value="drinks">Drinks</option>
  </select>
 

 

              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type='number' defaultValue={price} placeholder='price' name='price' className='px-3 py-3 rounded' {...register("price", { required: true })} />
                {errors.price && <span className='text-red '>price is required</span>}
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe detais</span>
                </label>
                <textarea id="w3review" defaultValue={ recipe} placeholder="items  recipe hear" className='px-3 pt-3' name=" recipe" rows="4" cols="50" {...register(" recipe", { required: true })}></textarea>
             
                {errors. recipe && <span className='text-red '> recipe is required</span>}
              </div>
              <div>
              <input type="file" className="file-input w-full max-w-xs" {...register("images", { required: true })} />
              {errors.images && <span className='text-red '>images is required</span>}
              </div>
              <div className="mt-6">
            <button className='btn'>update an Items <FaUtensils></FaUtensils></button>
              </div>
            </form>
            </div>
        </div>
    );
};

export default UpdateItems;