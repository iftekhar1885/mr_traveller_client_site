import React from 'react';
import './Banner.css';
import img1 from '../../../assets/pic-4.webp';
import img2 from '../../../assets/pic-10.jpeg';
import img3 from '../../../assets/pic-3.jpg';
import img4 from '../../../assets/pic-11.jpeg';
import img5 from '../../../assets/pic-5.jpg';
import img6 from '../../../assets/pic-6.jpg';
import BannerDetails from './BannerDetails';
const Banner = () => {

    const bannerData = [
        {
          image: img1,
          prev: 1,
          id: 1,
          next: 2
        },
        {
          image: img2,
          prev: 1,
          id: 2,
          next: 3
        },
        {
          image: img3,
          prev: 2,
          id: 3,
          next: 4,
        },
        {
          image: img4,
          prev: 3,
          id: 4,
          next: 5
        },
        {
          image: img5,
          prev: 4,
          id: 5,
          next: 6
        },
        {
          image: img6,
          prev: 5,
          id: 6,
          next: 1
        }
    
      ]
    return (
        <div className="carousel w-full py-10">
                      {
            bannerData.map(slide => <BannerDetails
            key={slide.id}
            slide={slide}
            ></BannerDetails>)
          }

</div>
    );
};

export default Banner;