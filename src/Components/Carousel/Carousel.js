import React from 'react';
import Banner1 from '../../Images/Banner1.jpg';
import Banner2 from '../../Images/Banner2.jpg';
import Banner3 from '../../Images/Banner3.jpg';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{height:'500px'}} src={Banner1} class="d-block w-100" alt=""/>
                            <div class="carousel-caption  d-md-block">
                                
                                <h1 style={{marginBottom:'200px'}} className='text-center justify-content-center'>I'LL BURN YOUR FAT</h1>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{height:'500px'}} src={Banner2} class="d-block w-100" alt=""/>
                            <div class="carousel-caption  d-md-block">
                                <h1 style={{marginBottom:'200px'}}>BUILD A PERFECT HEALTH GROWTH</h1>
                                
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{height:'500px'}} src={Banner3} class="d-block w-100" alt=""/>
                            <div class="carousel-caption  d-md-block">
                                <h1 style={{marginBottom:'200px'}}>STAY HAPPY STAY FREE</h1>
                                
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Carousel;