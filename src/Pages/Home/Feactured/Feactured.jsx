import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import fectImg from "../../../assets/home/featured.jpg";
import './style.css';
const Feactured = () => {

    return (
        <div  className='feactImg text-white py-4'>
            <SectionTitle heading={"From our menu"} subHeading={"check it out"}></SectionTitle>
            <div  className='max-w-screen-lg my-10 mx-auto flex gap-5'>
<div>
    <img src={fectImg} alt='feactured imae' className='rounded-md' />
</div>

<div className='text-center text-white grid content-center'>
    <p>April 26 ,2024</p>
    <h3 className='uppercase text-xl font-bold my-4'>what can i get some?</h3>
    <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
    <div className='grid justify-items-center '>
    <button className="btn btn-outline text-white border-0 border-b-4 w-28 text-center  ">Default</button>
    </div>
   
</div>

            </div>
        </div>
    );
};

export default Feactured;