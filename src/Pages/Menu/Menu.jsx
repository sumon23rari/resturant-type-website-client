import React from 'react';
import Cover from '../Shared/Cover/Cover';
import menuImg from "../../assets/menu/banner3.jpg"
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu]=useMenu();
    const offButton="order your favourite food";
    
  
   const offered=menu.filter((item)=>item.category==="offered")
   const desserts=menu.filter((item)=>item.category==="dessert")
    const pizza=menu.filter((item)=>item.category==="pizza");
    const salad=menu.filter((item)=>item.category==="salad");
    const soup=menu.filter((item)=>item.category==="soup");
    // const salad=menu.filter((item)=>item.category="salad");
    // const soup=menu.filter((item)=>item.category="soup");
    return (
        <div className=''>
            <Helmet>
                <title>bistro || menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            <SectionTitle heading={"today's offers"} subHeading={"Don't miss"}></SectionTitle>
            <MenuCategory items={offered} title="offered" buttonText={offButton}></MenuCategory>
            <MenuCategory items={desserts} title="desserts" img={dessertImg} buttonText={offButton}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg} buttonText={offButton}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg} buttonText={offButton}></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg} buttonText={offButton}></MenuCategory>
        </div>
    );
};

export default Menu;