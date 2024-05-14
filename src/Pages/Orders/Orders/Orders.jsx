import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import shopImg from '../../../assets/shop/banner2.jpg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCards from '../../Shared/FoodCards/FoodCards';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Orders = () => {
    const categories=['offered','salad','pizza','soups','desserts','drinks']

    const {category}=useParams()
    const initalIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initalIndex);
    const [menu]=useMenu();
    const drinks=menu.filter((item)=>item.category==="drinks")
    const offered=menu.filter((item)=>item.category==="offered")
    const desserts=menu.filter((item)=>item.category==="dessert")
     const pizza=menu.filter((item)=>item.category==="pizza");
     const salad=menu.filter((item)=>item.category==="salad");
     const soup=menu.filter((item)=>item.category==="soup");
    return (
        <div>
            <Helmet>
                  <title>orders</title>
            </Helmet>
            <Cover img={shopImg} title="Our shop"></Cover>
            <div className='max-w-screen-xl mx-auto my-8'>

         
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
      <TabList className="!border-b-0 flex justify-center font-bold text-xl uppercase">
        <Tab>offered</Tab>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>soups</Tab>
        <Tab>desserts</Tab>
        <Tab>drinks</Tab>
      </TabList>
      <TabPanel>
<FoodCards items={offered}></FoodCards>

      </TabPanel>
      <TabPanel>
<FoodCards items={salad}></FoodCards>

      </TabPanel>
      <TabPanel>
<FoodCards items={pizza}></FoodCards>

      </TabPanel>
      <TabPanel>
<FoodCards items={soup}></FoodCards>

      </TabPanel>
      <TabPanel>
<FoodCards items={desserts}></FoodCards>

      </TabPanel>
      <TabPanel>
      <FoodCards items={drinks}></FoodCards>
      </TabPanel>
    </Tabs>
    </div>
        </div>
    );
};

export default Orders;