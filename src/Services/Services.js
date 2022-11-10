import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ServiceCard from './ServiceCard';

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mr-traveller-server-two.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);



    return (
        <div className='mt-20 mb-20'>
            <div className='text-center m-4 mb-5'>
                <h2 className='text-5xl font-bold'>Planed Tour</h2>

            </div>
            <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>
                {
                    Services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
            <Link to='/moreservice'>
                <button className="btn btn-warning text-center m-20 p-7 ">More Services</button>
            </Link>

        </div>
    );
};

export default Services;