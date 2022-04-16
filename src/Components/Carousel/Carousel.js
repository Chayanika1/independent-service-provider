import React from 'react';
import Banner1 from '../../Images/Banner1.jpg';
import Banner2 from '../../Images/Banner2.jpg';
import Banner3 from '../../Images/Banner3.jpg';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Banner1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={Banner2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={Banner3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Carousel;