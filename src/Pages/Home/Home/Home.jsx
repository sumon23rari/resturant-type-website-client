import React from 'react';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Feactured from '../Feactured/Feactured';
import Testimonials from '../Testimonials/Testimonials';

import { Helmet } from 'react-helmet-async';
import Banner from '../../Shared/Banner/Banner';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
     
    <Category></Category>
  <PopularMenu></PopularMenu>
   <Feactured></Feactured>
   <Testimonials></Testimonials>
   </div>
        </div>
    );
};

export default Home;