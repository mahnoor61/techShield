import React from 'react';
import '../styles/Port.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
export default function Port() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-md-5">
          <div className="col-md-12">
            <p id="project" className="mt-md-5 text-center">Featured Projects</p>
            <h1 className='text-center  text-white' id="portfolio">PORTFOLIO</h1>
            <hr color="white" width="200px" />
          </div>
        </div>
        <div className="row mt-md-5">
          <div className='col-lg-12 col-sm-12'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}  // Include the Autoplay module
            autoplay={{  // Configure autoplay
              delay: 2000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Continue autoplay even on user interaction
            }}
            className="mySwiper"
          >

             <SwiperSlide>
              <div id='s1' className='sh'>
                <div className='d-flex justify-content-start align-items-end h-100 p-md-5'>
                  <div>
                    <p className='text-light'>Game Development</p>
                    <h2 className='text-white'>Portfolio-Design-1</h2>
                    <Link type="button" className='btn btn-outline-light text-white' to='/design1'>Case Study</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div id='s2' className='sh'>
                <div className='d-flex justify-content-start align-items-end h-100 p-md-5'>
                  <div>
                    <p className='text-light'>Game Development</p>
                    <h2 className='text-white'>Portfolio-Design-2</h2>
                    <Link type="button" className='btn btn-outline-light text-white' to="/design2">Case Study</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div id='s3' className='sh'>
                <div className='d-flex justify-content-start align-items-end h-100 p-md-5'>
                  <div>
                    <p className='text-light'>Game Development</p>
                    <h2 className='text-white'>Portfolio-Design-3</h2>
                    <Link type="button" className='btn btn-outline-light text-white' to="/design3">Case Study</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div id='s4' className='sh'>
                <div className='d-flex justify-content-start align-items-end h-100 p-md-5'>
                  <div>
                    <p className='text-light'>Game Development</p>
                    <h2 className='text-white'>Portfolio-Design-4</h2>
                    <Link type="button" className='btn btn-outline-light text-white' to="/design4">Case Study</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div id='s5' className='sh'>
                <div className='d-flex justify-content-start align-items-end h-100 p-md-5'>
                  <div>
                    <p className='text-light'>Game Development</p>
                    <h2 className='text-white'>Portfolio-Design-5</h2>
                    <Link type="button" className='btn btn-outline-light text-white' to="/design5">Case Study</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div id='s6' >
                <div className='d-flex justify-content-start align-items-end h-100 p-md-5'>
                  <div>
                    <p className='text-light'>Game Development</p>
                    <h2 className='text-white'>Portfolio-Design-6</h2>
                    <Link type="button" className='btn btn-outline-light text-white' to="/design6">Case Study</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <a type="button" id="butPort" className='mx-auto d-block mt-md-5 p-md-3 text-center' href='/portfolio'>View All Portfolio</a>
          </div>
        </div>
      </div>
    </>
  )
}




