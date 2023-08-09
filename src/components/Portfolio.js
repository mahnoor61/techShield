import React from 'react';
import css from '../styles/Portfolio.css';
import  { useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
export default function Portfolio() {
  return (
    <>
    <div className="container-fluid">
     <div className="row mt-md-5">
        <div className="col-md-12">
        <p id="project" className="mt-md-5 text-center">Featured Projects</p>
        <h1 className='text-center  text-white' id="portfolio">PORTFOLIO</h1>
        <hr color="white" width="200px"/>
        </div>
        </div> 
        <div className="row mt-md-5">
            <div className="col-md-12">
            {/* slider */}
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
            </div>
        </div>
        <div className="row">
<div className="col-md-12">
    <button type="button" id="butPort" className='mx-auto d-block mt-md-5 p-md-3'>View All Portfolio</button>
</div>


        </div>
        </div>
    </>
  )
}
