import React from 'react';

const BottomButton = ({title}) => {
    return (
        <div className='grid justify-items-center '> 
<button className="btn btn-outline black border-0 border-b-4 uppercase font-bold">{title}</button>
</div>
    );
};

export default BottomButton;