import React from 'react';

const ServiceDetails = ({addDetail}) => {
    const { _id, image, customer, price, details} = addDetail;

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this service')
        if(proceed){
            fetch(`https://mr-traveller-server-two.vercel.app/addservices/${id}`, {
                method: 'DELETE'

            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-20">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                     {customer}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>price: ${price}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Edit</div>
                    <div onClick={() => handleDelete(_id)} className="badge badge-outline">Delete</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;