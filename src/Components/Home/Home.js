import React from 'react';
import AllService from '../AllService/AllService';
import Carousel from '../Carousel/Carousel';
import Healthy from '../Healthy/Healthy';
//import Facilities from '../Facilities/Facilities';
import Intro from '../Intro/Intro';
import MyPrograms from '../Myprograms/MyPrograms';
import Trainer from '../Trainer/Trainer';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <AllService></AllService>
            <Trainer></Trainer>
            <Healthy></Healthy>
            <MyPrograms></MyPrograms>
           
            
        </div>
    );
};

export default Home;