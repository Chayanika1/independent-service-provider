import React from 'react';
import Person from '../../Images/Person.jpg';
const Intro = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-8'>
                    <img className="rounded-circle"style={{height:'150px',width:'150px'}} src={Person} alt=""/>

                </div>
                <div className='col-lg-6 col-sm-12 col-md-8'>
                    <h1 style={{color:'red'}}>WANT TO FEET ALAWAYS? I AM HERE TO GUIDE YOU</h1>
                    <p>I will teach my clients how to properly use 
                        workout equipment and follow workout plans to target different areas of the body. 
                        They measure client success and make adjustments in their methods to
                         overcome obstacles and motivate their clients to develop healthy habits.</p>

                </div>
            </div>
            
        </div>
    );
};

export default Intro;