import React from 'react';
import { Link } from 'react-router-dom';

const MoreServiceDetails = ({moreService}) => {

    const {_id, image_url, price, title, description } = moreService;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="" /></figure>
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

export default MoreServiceDetails; 