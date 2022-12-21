import React from 'react';
import '../Banner/BannerItem.css';
const BannerDetails = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (

    <div id={`slide${id}`} className="carousel-item relative w-full grid sm:row-auto">
      <div className='carousel-img w-full'>
        <img src={image} alt='' className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className='lg:text-6xl font-bold text-white sm:text-2xl'>
          MR TRAVELLER <br />
          TRAVELLING<br />
          BLOG && SERVICING
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-2/3">
        <p className='lg:text-xl text-white'>When planning your next trip, check out his travel blog because he also runs tours.Canadians take up a lot of real ...</p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div>

  );
};

export default BannerDetails;