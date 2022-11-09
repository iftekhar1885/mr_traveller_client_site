import React, { useEffect, useState } from 'react';

const ReviewsRow = ({ review, handleDeleted,  handleUpdate}) => {
    const {_id, serviceName, price, service,phone, customer,status, message} = review;
    const [reviewService, setReviewService] = useState({})

    useEffect( () =>{ 
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setReviewService(data));


    }, [service])

    
    return (
            <tr className=''>
                <th>
                    <label>
                        <button onClick={ () => handleDeleted(_id)} className='btn btn-ghost'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className=" w-20 h-16">
                                
                              {
                                reviewService?.image_url && 
                                <img src={reviewService.image_url
                                } alt="Avatar Tailwind CSS Component" />
                              }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{price}</span>
                </td>
                <td>{message}</td>
                <th>
                    <button 
                      onClick={ () => handleUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
                </th>
            </tr>
        
    );
};

export default ReviewsRow;