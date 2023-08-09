import React from 'react'
import css from '../styles/DesignImg.css';
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
export default function DesignImg() {
  return (
    <>
     <div className="container-fluid mt-md-5">
        <div className="row mt-md-5">
            <div className="col-md-12">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="images/gallery/d1.jpg" alt="d1" width="80%" className='mx-auto d-block' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="images/gallery/d2.jpg" alt="d2" width="80%" className='mx-auto d-block'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="images/gallery/d3.jpg" alt="d3" width="80%"className='mx-auto d-block'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="images/gallery/d4.jpg" alt="d4" width="80%" className='mx-auto d-block'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="images/gallery/d5.jpg" alt="d5"width="80%" className='mx-auto d-block'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="images/gallery/d6.jpg" alt="d6" width="80%" className='mx-auto d-block'/>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
        </div> 
    </>
  )
}
