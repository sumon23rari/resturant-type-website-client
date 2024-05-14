import React, { useState } from 'react';
import FoodCard from './FoodCard';

const FoodCards = ({items}) => {
    const [currentPerpage,setCurrentPerpage]=useState(1)
    const displayPerPage=6;
    const lastIndex=currentPerpage*displayPerPage;
    const firstIndex=lastIndex-displayPerPage;
    const displayItems=items.slice(firstIndex,lastIndex);

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='grid grid-cols-3 gap-4 gap-y-8 my-6'>
                {
                    items.map((item)=><FoodCard key={item._id} food={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodCards;