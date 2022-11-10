import React from 'react';
// import { useLoaderData } from 'react-router-dom';

const AddServices = () => {
    //    const {title} = useLoaderData(); 

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const price = form.number.value;
        const message = form.message.value;
        console.log(name, price, photoURL, message)

        const review = {

            customer: name,
            image : photoURL, 
            price : price,
            details: message,

        }

        fetch('https://mr-traveller-server-two.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Added Successfully')
                    form.reset();
                }
            }
            )
            .catch(er => console.error(er));
    }


    return (
        <div>
            <h2 className='text-5xl text-center m-10'> Please add a New Service</h2>
            {/* <h2 className='text-5xl text-center m-10'> {title}</h2> */}
            <form onSubmit={handleAddService}>
                <div className='grid gap-4 m-10 shadow-lg rounded-lg p-14 mb-0 bg-violet-400'>
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input name='name' type="text" placeholder="service Name" className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text">Service Image URl</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Your Phone" className="input input-bordered w-1/2" required />
                    <label className="label">
                        <span className="label-text">Service Price</span>
                    </label>
                    <input name='number' type="text" placeholder="" className="input input-bordered w-1/3" />
                    <label className="label">
                        <span className="label-text">About Service</span>
                    </label>
                    <textarea name='message' className="textarea textarea-bordered w-1/2" placeholder="Your message" required></textarea>
                    <br />
                    <input className='btn m-3 w-1/2' type='submit' value='ADD SERVICE'></input>
                </div>


            </form>
        </div>

    );
}

export default AddServices;