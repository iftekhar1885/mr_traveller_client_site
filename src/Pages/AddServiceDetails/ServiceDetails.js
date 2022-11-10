import React from 'react';

const ServiceDetails = ({addDetail}) => {
    const {  image, customer, price} = addDetail;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                     {customer}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;