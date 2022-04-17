import React from 'react';
import Notfound from '../../Images/Notfound.jpg'

const Error = () => {
    return (
        <div>
            <img className='img-fluid' src={Notfound} alt=""/>
            
        </div>
    );
};

export default Error;