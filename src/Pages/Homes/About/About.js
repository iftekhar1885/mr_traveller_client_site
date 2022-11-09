import React from 'react';

const About = () => {
    return (
        <div className="hero my-20 mt-20 bg-gray-600 rounded-lg border border-indigo-600">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-2/4'>
                <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZnJpZW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/4'>
                    <h1 className="text-5xl font-bold">About</h1>
                    <p className="py-6">I was a few drinks down at a London Travel Massive event and a lady unknown to me had just targeted me with the above. In fact, interrupting the conversation I was having midflow. Usually full of advice and happy to dish it out this question had me stumped, as much as her demeanour.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;