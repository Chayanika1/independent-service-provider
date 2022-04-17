import React from 'react';
import Diet1 from '../../Images/Diet1.jpg';
import Diet2 from '../../Images/Diet2.jpg';
import Diet3 from '../../Images/Banner3.jpg';
const CheckOut = () => {
    return (
        <div className='container'>
            <h1 className='p-5'>Don't Wait For Tomorrow</h1>
            <div class='row'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img style={{height:"300px"}}src={Diet1} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><i class="fa-brands fa-nutritionix"></i></h5>
                                    <p class="card-text">Personalized Nutrition plan</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img style={{height:"300px"}}src={Diet3} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><i class="fa-solid fa-dumbbell"></i></h5>
                                    <p class="card-text">Personalized exercise <br/>program</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img style={{height:"300px"}}src={Diet2} class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title"><i class="fa-solid fa-clock"></i></h5>
                                    <p class="card-text">Individual routine Program</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default CheckOut;