import React from 'react';
import mypic from '../../Images/mypic.jpg'

const About = () => {
    return (
        <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <img className="border border-4 rounded-3" style={{ height: '400px' }} src={mypic} alt="" />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <h4>Specialities <i class="fa-solid fa-trophy"></i></h4>
                <ul>
                    <li>know HTML,CSS JS,BOOTSTRAP.REACT,TAILWIND</li>
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
                    <li>B.Tech in Electronics and Communication Engineering</li>
                    <li>Certificate 3 and 4 Fitness</li>
                    <li>Advanced Boxing Instructor</li>
                    <li>Clinical Practicum for spinal Cord Injuries Certificate</li>
                    <li>Weight Lifting/Sports Power Coach</li>
                    <li>Level 1 Strength and Conditioning Coach</li>
                </ul>
                <h4>Bio <i class="fa-solid fa-biohazard"></i></h4>
                <p>I love the challenge  each person because it's individual...."You Vs You".i love to learn new things.I am a gym trainer too
                    .As a personal Trainer I am constantly researching and keep up with currrent fitness trends.
                    Which i trial prior to prescribing.I strive to help each of my clinets reach their maximum potential and love seeing them achieve their
                    goals.My mission is to be educate to provide confidence and knowledge!
                    I want to be a web developer.This is my Goals
                </p>
                <h4>Skills</h4>
                Bootstrap

                <div class="progress">
                    <div class="progress-bar progress-bar-striped "style={{width: "10%"}} role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                REACT
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                JAVA SCRIPT
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                CSS
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                HTML
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


            </div>


        </div>
    );
};

export default About;