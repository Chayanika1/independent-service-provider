import React from 'react';
import person from '../../Images/Person.jpg';

const Trainer = () => {
    return (
        <div>
            <div class="card mb-3 mx-auto" style={{maxWidth: "540px"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={person} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">About Me</h5>
                            <p class="card-text">The big Oxmox advised her not to do so,because there were thousands of bad commas,wild question marks ans devious Semikoli,but the little Blind Text did'nt listen.She packed her seven versalia.</p>
                            <h6>My Mission</h6>
                            <p>"Far far away,behind the word mountains,far from the countries Vokalia and Cosonantia,thete live the blind texts."</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Trainer;