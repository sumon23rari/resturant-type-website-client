import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
          <h3 className='text-xl font-medium text-[#D99904] pb-3 border-b-2 border-gray-400  mx-auto mb-3'>---{subHeading}----</h3>  
          <h3 className='uppercase font-bold text-2xl pb-3 border-b-2 border-gray-400  mx-auto'>---{heading}----</h3>  
        </div>
    );
};

export default SectionTitle;