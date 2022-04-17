import React from 'react';
import Person from '../../Images/Person.jpg'

const About = () => {
    return (
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <img className="border border-4 rounded-3"style={{height:'400px'}}src={Person}alt=""/>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <h4>Specialities <i class="fa-solid fa-trophy"></i></h4>
                <ul>
                    <li>Sport specific training and working with athles</li>
                    <li>
                        Strength and conditioning
                    </li>
                    <li>Muscle building and weight loss programs</li>
                    <li>Boxing and Martial Arts</li>
                    <li>Group Training</li>
                    <li>Comp Prep Coach and Competitor IFBB</li>
                </ul>
                <h4>Qualifications <i class="fa-solid fa-book"></i></h4>
                <ul>
                    <li>Certificate 3 and 4 Fitness</li>
                    <li>Advanced Boxing Instructor</li>
                    <li>Clinical Practicum for spinal Cord Injuries Certificate</li>
                    <li>Weight Lifting/Sports Power Coach</li>
                    <li>Level 1 Strength and Conditioning Coach</li>
                </ul>
                <h4>Bio <i class="fa-solid fa-biohazard"></i></h4>
                <p>I love the challenge training provides each person because it's individual...."You Vs You"
                    .As a personal Trainer I am constantly researching and keep up with currrent fitness trends.
                    Which i trial prior to prescribing.I strive to help each of my clinets reach their maximum potential and love seeing them achieve their
                    goals.My mission is to be educate to provide confidence and knowledge!
                     <h1>"FUN + PROGRESSION =OBSESSION</h1>
                </p>

            </div>
           
            
        </div>
    );
};

export default About;