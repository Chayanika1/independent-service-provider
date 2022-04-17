import React, { useEffect, useState } from 'react';
import Facilities from '../Facilities/Facilities';

const AllService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div class="container">
            <h1 className='p-4'><i>MY <span className='text-danger'>SERVICES</span></i></h1>
            <div class='row'>
            {
                services.map(service => <Facilities service={service}></Facilities>)
            }

        </div>

        </div>

        



    );
};

export default AllService;