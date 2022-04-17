import React from 'react';
import Gym1 from '../../Images/Gym1.jpg';
import Gym2 from '../../Images/Gym2.jpg';
import Gym4 from '../../Images/Gym3.jpg';
import Gym3 from '../../Images/Gym4.jpg';


const MyPrograms = () => {
    return (
        <div>
            <h1 className='p-4'>My Programs</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img style={{height:'400px'}}src={Gym1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Russian Twist</h5>
                                <p class="card-text">Sets:3,Reps:8-10,Rest :30sec.
                                She packed her seven versalia,put her initial into the belt and made herself on the way.</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{height:'400px'}} src={Gym2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Dumbell Squat</h5>
                                <p class="card-text">Sets :3,Reps:8-10,rest:10sec.She packed her seven versalia,put her initial into the belt and made herself on the way</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{height:'400px'}} src={Gym3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Reverse Lunges</h5>
                                <p class="card-text">Sets :3,Reps:8-10,rest:10sec.She packed her seven versalia,put her initial into the belt and made herself on the way</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img style={{height:'400px'}}src={Gym4} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Push ups</h5>
                                <p class="card-text">Sets :3,Reps:8-10,rest:10sec.She packed her seven versalia,put her initial into the belt and made herself on the way</p>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPrograms;