import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='row text-white bg-dark'>
            <div className='col-lg-12 col-md-12 col-sm-12 p-3'>
                <h4>Service Hours</h4>
                <ul className='contact-list'>
                    <li>Week Days : 5.00-22.00</li>
                    <li>Saturday: CLOSED</li>
                    <li>Sunday : 5.00-22.00</li>
                </ul>

                <h4>Contact Info</h4>
                <ul className='contact-list'>
                    <li><i class="fa-solid fa-location-dot"></i>198 West 21th Street,Suite 721 New York NY 10016</li>
                    <li><i class="fa-solid fa-envelope"></i>info@domain.com</li>
                    <li><i class="fa-solid fa-phone"></i>+123 456 7890</li>
                </ul>
                <h6 className='text-center'>&copy; everything is copy right</h6>



            </div>


        </div>
    );
};

export default Footer;