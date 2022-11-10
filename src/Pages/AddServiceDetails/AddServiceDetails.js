import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

import ServiceDetails from './ServiceDetails';

const AddServiceDetails = () => {
    const {user} = useContext(AuthContext)

    const [addDetails, setAddDetails] = useState([])

   useEffect(() =>{
    fetch(`https://mr-traveller-server-two.vercel.app/addservices?_id=${user?.email}`)
    .then(res => res.json())
    .then(data => setAddDetails(data))

   }, [user?.email])


    return (
        <div className='mt-20 mb-20'>
            <h2 className='text-5xl text-center'>Your Total Add Service: {addDetails.length}</h2>
            
            <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>

            {
                addDetails.map(addDetail => <ServiceDetails
                
                key={addDetail._id}
                addDetail={addDetail}
                ></ServiceDetails>)
            }
            </div>
        </div>
    );
};

export default AddServiceDetails;