import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [feedBacks,setFeedBack]=useState([])
    useEffect(()=>{
        fetch('https://bistro-boss-server-lovat-two.vercel.app/review')
        .then((res)=>res.json())
        .then((data)=>setFeedBack(data))
    },[])
    return (
        <div>
            <SectionTitle heading={"testimonials"} subHeading={"what our client says"}></SectionTitle>
            <div className='flex justify-center text-xl'>
                <span className='text-[#CD9003] mr-2 flex'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </span>
                <FaStar/>
            </div>
        <div className=' mx-auto'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                feedBacks.map(feedback=><SwiperSlide key={feedback._id}>

                    <div className='flex flex-col md:mx-28 my-16 items-center'>
                        <p className='text-center'>{feedback.details}</p>
                        <h3 className="text-2xl text-orange-400">{feedback.name}</h3>
                    </div>
                </SwiperSlide>)
            }
           
            </Swiper>
        </div>
                    </div>
    );
};

export default Testimonials;