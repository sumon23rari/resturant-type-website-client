import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';
import BottomButton from '../../../components/BottomButton/BottomButton';

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then((res)=>res.json())
        .then((data)=>{
            const popItems=data.filter((item)=>item.category==='popular')
            setMenu(popItems)
        })
    },[])
    return (
       <section className='py-10'>
        <SectionTitle heading={"from our menu"} subHeading={"check it out"}></SectionTitle>
<div className='my-4 grid md:grid-cols-2 gap-4'>
    {
        menu.map(me=><MenuItem key={me._id} me={me}></MenuItem>)
    }
</div>
<BottomButton title={"view full menu"}></BottomButton>
       </section>
    );
};

export default PopularMenu;