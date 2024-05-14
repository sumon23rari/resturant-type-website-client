import React from 'react';

const MenuItem = ({me}) => {
    const {image,recipe,name,price}=me;
    return (
        <div className='flex my-2'>
          <img  style={{borderRadius: '0 200px 200px 200px'}} src={image} className="w-[100px]" alt='image'/>
          <div className='mx-3 px-2'>
            <h3 className='uppercase '>{name}------------</h3>
            <p>{recipe}</p>
            </div>  
     <h3 className='pr-3'>{price}</h3>
        </div>
    );
};

export default MenuItem;