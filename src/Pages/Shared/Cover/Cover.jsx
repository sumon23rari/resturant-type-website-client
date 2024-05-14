import React from 'react';
import './style.css';
const Cover = ({img,title}) => {
    return (
        <div className=" hero coverImg"  style={{backgroundImage: `url(${img})`}}>
  
  <div className="text-center text-white grid place-content-center rounded-md bg-opacity-50 max-w-screen-lg  bg-black   h-[260px]">
    <div className="mx-6">
      <h1 className="mb-5 text-5xl font-bold text-center uppercase ">{title}</h1>
      <p className="mb-5 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
    );
};

export default Cover;