import React from 'react';
import Carousel from '../Carousel/Carousel';
import Facilities from '../Facilities/Facilities';
import Intro from '../Intro/Intro';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Intro></Intro>
            <Facilities></Facilities>
            
        </div>
    );
};

export default Home;