import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

// import required modules


import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
<>  
<SectionTitle heading={"From 11:00am to 10:00pm"} subHeading={"order online"}></SectionTitle> 
           <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="mySwiper "
      >
        
        <SwiperSlide><img src={slide1}   alt='slide1'/>
        <h3  className="text-4xl uppercase text-center -mt-16 text-white">salads</h3>
         </SwiperSlide>
        <SwiperSlide>
            <img src={slide2}    alt='slide2'/>
            <h3   className="text-4xl uppercase text-center -mt-16 text-white">soups</h3>
        </SwiperSlide>
        <SwiperSlide>
<img src={slide3}    alt='slide3' />
<h3   className="text-4xl uppercase text-center -mt-16 text-white">pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4}    alt='slide4'/>
            <h3   className="text-4xl uppercase text-center -mt-16 text-white">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5}    alt='slide5'/>
            <h3   className="text-4xl uppercase text-center -mt-16 text-white">birani</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4}    alt='slide4'/>
            <h3   className="text-4xl uppercase text-center -mt-16 text-white">desserts</h3>
        </SwiperSlide>
      
      </Swiper>
      </>
      
    );
};

export default Category;