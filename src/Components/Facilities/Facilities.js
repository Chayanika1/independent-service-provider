import React from 'react';
import { Link } from 'react-router-dom';
import './Facilities.css'

const Facilities = (props) => {
    const { name, description, img,price } = props.service
    return (

        <div class="g-5 rounded-3 col-sm-12 col-md-6 col-lg-4 shadow p-3 mb-5 bg-body rounded'">


            <div class="card">
                <img style={{height:'200px'}}src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h4>${price}</h4>
                    <p class="card-text">{description}</p>
                   
                        <Link to="/CheckOut">
                        <button type="button" class="btn btn-dark"> SEE MORE</button>

                        </Link>
                        
                       

                </div>
            </div>



        </div>


    );
};

export default Facilities;