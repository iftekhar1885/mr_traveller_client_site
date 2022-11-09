import React from 'react';

const About = () => {
    return (
        <div className="hero my-20 mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZnJpZW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">About</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;