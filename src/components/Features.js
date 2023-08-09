import React from 'react'
import css from '../styles/Features.css';
import Navbar from './Navbar';
export default function Features() {
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
        <div className="row mt-md-5">
            <div className="col-md-12">
                <h6 id="choose" className='text-center mt-md-5'>Why Choose Us</h6>
                <h2 className='text-white text-center' id="feature">FEATURES</h2>
                <hr color="white" width="100px"/>
            </div>
        </div>
        </div>
        <div className="container">
        <div className="row mt-md-5 mb-md-5">
            <div className="col-md-4">
                <div className="mt-md-5 d-sm-flex">
                <div className="col-md-8 order-1">
                <h5 className="text-white text-md-right content">Listen</h5>
                    <p className="text-muted text-md-right content">We listen to your needs</p>
                  </div>
                   <div className="col-md-4 order-2">
                   <img src="images/features/listen.png" alt="listen" width="50%" height="50rem" className='ml-md-2 img-fluid icon' />
                   </div>
                     </div>
                     <div className="row">
                      <div className="col-md-8">
                      <h5 className="text-white text-md-right content">Plan</h5>
                      <p className="text-muted text-md-right content">Plan the solution accordingly</p>
                      </div>
                      <div className="col-md-4">
                      <img src="images/features/plan.png" alt="plan" width="50%" height="50rem" className='ml-md-3 img-fluid icon'/>
                      </div>
                     </div>
                    <div className="row">
                      <div className="col-md-8">
                      <h5 className="text-white text-md-right content">Develop</h5>
                      <p className="text-muted text-md-right content">Implement the solution</p>  
                      </div>
                      <div className="col-md-4">
                      <img src="images/features/develop.png" alt="develop" width="50%" height="50rem" className='ml-md-3 icon'/>
                      </div>
                      </div>
                    </div> 
            <div className="col-md-4">
                <img src="images/features/ceo.png" alt="ceo" width="60%" className="mt-md-4 mx-auto d-block img-fluid" id="ceo" />
            </div>

            <div className="col-md-4">
            <div className="row mt-md-5">
              <div className="col-md-4">
              <img src="images/features/test.png" alt="test" width="50%"  height="50em" className='img-fluid icon'/>
              </div>
              <div className="col-md-8">
              <h5 className="text-white content">Test</h5>
              <p className="text-muted content">Test for errors and bugs</p>
              </div>
               </div>
               <div className="row">
                <div className="col-md-4">
                <img src="images/features/deploy.png" alt="deploy" width="50%" height="50em" className='img-fluid icon'/>
                </div>
                <div className="col-md-8">
                <h5 className="text-white content">Deploy</h5>
                    <p className="text-muted content">Make it up and running</p>
                </div>
               </div>
                   <div className="row">
                    <div className="col-md-4">
                    <img src="images/features/support.png" alt="support" width="50%" height="50em" className='img-fluid icon'/>
                    </div> 
                    <div className="col-md-8">
                    <h5 className="text-white content">Support</h5>
                    <p className="text-muted content">24/7 Customer support</p>
                    </div>
                   </div> 
                     </div>
                </div>
            </div>
    
</>
  )
}
