import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../../components/MenuItem/MenuItem';
import BottomButton from '../../../components/BottomButton/BottomButton';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img,buttonText}) => {
  
    return (
        <div>
            {title !=="offered"? <Cover img={img} title={title}></Cover>:''}
<div className=' max-w-screen-xl mx-auto mb-8'>
            <div className='my-8 grid md:grid-cols-2 gap-4'>
    {
        items.map(item=><MenuItem key={item._id} me={item} img={img}></MenuItem>)
    }
    </div>
    <Link to={`/orders/${title}`}>
<BottomButton title={buttonText}></BottomButton>
</Link>
</div>
        </div>
    );
};

export default MenuCategory;