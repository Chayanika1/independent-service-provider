import React from 'react';
import AllService from '../AllService/AllService';
import Carousel from '../Carousel/Carousel';
import Healthy from '../Healthy/Healthy';
//import Facilities from '../Facilities/Facilities';
import Intro from '../Intro/Intro';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AllService></AllService>
            <Healthy></Healthy>
           
            
        </div>
    );
};

export default Home;