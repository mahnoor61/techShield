import React from 'react'
import css from '../styles/Home.css';

import Navbar from './Navbar';


export default function Home() {
  return (
   <>
   <div className="container-fluid">
    <div className="row" id="background">
      <div className="col-md-12">
      <Navbar item1="Home" item2="Portfolio" item3="Contact" button="METAVERSE"/>
        <div className="row mt-md-5">
        <div className="col-md-12 mt-md-5">
      <h5 className="card-title text-center mt-md-5" style={{'color':'#00e6e6'}} id="tec"># Team TechShield</h5>
      <h1 className='text-white text-center' id="ideas">Bring Ideas To Reality</h1>
      <p className="card-text text-white text-center" id="growing">Faster Growing IT Company</p>
      <button className="btn mx-auto d-block" type="button" id="b2">GET A FREE QUOTE</button>
      </div>
      </div> 
      </div>
    </div>
    
      {/* <Home2/> */}
      </div>
   </>
  )
}
