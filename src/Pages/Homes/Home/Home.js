import React from 'react';
import Services from '../../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Featured from '../Feature/Featured';
// import Banner from '../Banner/Banner';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;