import React from 'react';
import Common from './Common';
import Web from '../src/Images/home.gif';

const Home = ()=>{
    return(
        <>
             <Common name='Grow your business with' imgsrc={Web} visit='/service' btnName="Get Started"/>
        </>

    );
};

export default Home;