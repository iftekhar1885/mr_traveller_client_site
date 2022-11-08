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
                alert('order placed successfully')
                form.reset();
            }
        }
            )
        .catch(er => console.error(er));
    }
     return (
        <div>
             <div>
            <form onSubmit={handleReviewOrder}>
                <h2 className='text-4xl m-3'>{title}</h2>
                <h4 className='text-3xl m-3'>price:$ {price}</h4>
                <p className='text-semibold m-5'>{description}</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required/>
                <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" />
                </div>
            <textarea name='message' className="textarea textarea-bordered w-full m-3" placeholder="Your message" required></textarea>
            <input className='btn m-3' type='submit' value='Place Your Order'></input>
            </form>
        </div>
        </div>
    );
};

export default CheckOut;