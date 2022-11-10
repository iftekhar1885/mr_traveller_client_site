import React, { useEffect, useState } from 'react';
import MoreServiceDetails from './MoreServiceDetails';

const MoreService = () => {


    const [moreServices, setService] = useState([]);

    useEffect(() => {
        fetch('https://mr-traveller-server-two.vercel.app/service')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div className='mt-10 mb-20'>
            <div className='text-center m-4 mb-5'>
                {/* <p className='text-2xl font-bold text-blue-600 m-2'></p> */}
                <h2 className='text-5xl font-bold'>Planed Tour</h2>

            </div>
            <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>

                {
                    moreServices.map(moreService => <MoreServiceDetails
                        key={moreService._id}
                        moreService={moreService}
                    ></MoreServiceDetails>)
                }
            </div>
        </div>
    );
};


export default MoreService;