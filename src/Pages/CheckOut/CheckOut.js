import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {_id, title, price, description} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleReviewOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value
        const message = form.message.value;
       

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message

        }
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review Added Successfully')
                form.reset();
            }
        }
            )
        .catch(er => console.error(er));
    }
     return (
        <div>
             <div>
                <h2 className='text-5xl text-bold text-center'>This Is Details Part</h2>
              <diV className='border border-red-200 p-3 m-10 shadow-lg rounded-lg bg-yellow-500'>

                 <h2 className='text-4xl m-3 text-center text-bold'>{title}</h2>
                  <h4 className='text-2xl m-3 text-center text-bold'>price:$ {price}</h4>
                  <p className='text-semibold m-10'>{description}</p>
              </diV>
              <h2 className='text-5xl text-center m-10'> Please add a Review</h2>
                <form onSubmit={handleReviewOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-10 shadow-lg rounded-lg p-14 mb-0 bg-violet-400'>
                    
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required/>
                <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" />
                <textarea name='message' className="textarea textarea-bordered w-full shadow-lg rounded-lg p-14  m-6" placeholder="Your message" required></textarea>
                <br/>
                <input className='btn m-3' type='submit' value='Please added a new review'></input>
                </div>
            
            
            </form>
        </div>
        </div>
    );
};

export default CheckOut;