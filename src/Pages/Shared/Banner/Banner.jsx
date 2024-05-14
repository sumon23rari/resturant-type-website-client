import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import slide1 from "../../../assets/home/01.jpg";
import slide2 from "../../../assets/home/02.jpg";
import slide3 from "../../../assets/home/03.png";
import slide4 from "../../../assets/home/04.jpg";
import slide5 from "../../../assets/home/05.png";
import slide6 from "../../../assets/home/06.png";
const Banner = () => {
    return (
        <div>
            <Carousel autoPlay={true}>
                <div>
            <img src={slide1} alt='slide1' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slide2} alt='slide2' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slide3} alt="slide3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={slide4} alt='slide4' />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={slide5} alt='slide5'/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={slide6} alt='slide6' />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;