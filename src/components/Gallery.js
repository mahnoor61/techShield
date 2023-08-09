import React from 'react'
import css from '../styles/Gallery.css';
import DesignImg from './DesignImg';
import Navbar from './Navbar';
export default function Gallery() {
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
        <div className="row mt-md-5">
            <div className="col-md-12">
            <p id="images" className="mt-md-5 text-center">Featured Images</p>
        <h1 className='text-center  text-white' id="gallery">GALLERY</h1>
        <hr color="white" width="170px"/> 
            </div>
        </div>
        <div className="container">
        <div className="row mt-md-5">
            <div className="col-md-3">
                <img src="images/gallery/d1.jpg" alt="d1"  width="100%" />
                <h5 className='text-white mt-md-3'>Design-1</h5>
            </div>
            <div className="col-md-3">
            <img src="images/gallery/d2.jpg"  alt="d2" width="100%" />
                <h5 className='text-white mt-md-3'>Design-2</h5>
            </div>
            <div className="col-md-3">
            <img src="images/gallery/d3.jpg"  alt="d3" width="100%"/>
                <h5 className='text-white mt-md-3'>Design-3</h5>
            </div>
            <div className="col-md-3">
            <img src="images/gallery/d4.jpg"  alt="d4" width="100%" />
                <h5 className='text-white mt-md-3'>Design-4</h5>
            </div>
        </div>
        <div className="row mt-md-5">
            <div className="col-md-3">
            <img src="images/gallery/d5.jpg"  alt="d5" width="100%" />
                <h5 className='text-white mt-md-3'>Design-5</h5>  
            </div>
            <div className="col-md-3">
            <img src="images/gallery/d6.jpg" alt="d6" width="100%" />
                <h5 className='text-white mt-md-3'>Design-6</h5>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
        </div>
        </div>
        <div className="row mt-md-5">
            <div className="col-md-12">
                <button type="button" id="vim" className='mx-auto d-block mb-md-5'>View All Images</button>
            </div>
        </div>
      </div>
    </>
  )
}
