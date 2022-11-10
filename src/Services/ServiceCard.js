import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, image_url, price, title, description } = service;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            
          <PhotoProvider>
                 <PhotoView src={image_url}>
                <img src={image_url} style={{ objectFit: 'cover' }} alt="" />
            </PhotoView>
          </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='2xl text-red-500 font-semibold'>Price: $ {price}</p>
                <div className="card-actions justify-end">

                    {
                        description.length > 150 ?
                            <p>{description.slice(0, 150) + '...'}<Link to={`/checkout/${_id}`}><button className="btn btn-success">See Details</button></Link></p>
                            :
                            <p>{description}</p>

                    }

                </div>

            </div>
        </div>
    );
};

export default ServiceCard;