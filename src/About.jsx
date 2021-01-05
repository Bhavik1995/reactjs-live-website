import React from 'react';
import Common from './Common';
import Web from '../src/Images/about.gif';

const About = ()=>{
    return(
        <>
            <Common name='Welcome to About Page' imgsrc={Web} visit='/contact' btnName="Contact Now"/>
        </>

    );
};

export default About;