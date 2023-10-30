import React from "react";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <div className="container-fluid" id="contact">
        <div className="d-flex w-100 h-100 justify-content-center align-items-center  justify-content-sm-center align-items-sm-center flex-wrap">
          <div>
            <h1 className="display-3 font-weight-bolder mt-md-5" id="top">
              Contact with us
            </h1>
            <div className="d-flex w-100">
              <div className="col-md-12">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link to="/" className="linkli mr-3">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="linkli active">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid main2 pb-md-5">
        <div className="row">
          <div className="col-md-12">
            <h6 className="mt-md-5 text-center cuth6">CONTACT US TODAY</h6>
            <h1 className="text-white text-center mt-md-3" id="build">
              Build beautiful websites today!
            </h1>
            <p className="text-muted text-center mt-md-3 text">
              There are many variations of passages of Lorem Ipsum <br />
              available but the majority.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-md-5">
            <div className="col-md-4">
              <div className="card main3 design">
                <div className="card-body">
                  <div className="row mt-md-3">
                    <div className="col-md-3">
                      <i className="fa-solid fa-phone cut icon ml-md-4"></i>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-white card-title">Call us Today</h4>
                      <p className="text-muted card-text">
                        PS:+47 333 4444 333
                      </p>
                      <p className="text-muted card-text">
                        HO:+87 333 4444 333
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card main3 design">
                <div className="card-body">
                  <div className="row mt-md-3">
                    <div className="col-md-3">
                      <i className="fa-regular fa-envelope cut icon ml-md-4"></i>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-white card-title">Sent us E-mail</h4>
                      <p className="text-muted card-text">MR:hello@gmail.com</p>
                      <p className="text-muted card-text">HR:info@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card main3 design">
                <div className="card-body">
                  <div className="row mt-md-3">
                    <div className="col-md-3">
                      <i className="fa-solid fa-location-dot cut icon ml-md-4"></i>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-white card-title">Location</h4>
                      <p className="text-muted card-text">
                        123 Main Street, New York, NY 10030 is an example.
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-md-5"
        style={{ backgroundColor: "	 #191919"}}
      >
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-white text-center mt-md-5 cu">Contact Us</h1>
            <p className="text-muted text-center cu">
              I am available for freelance work. Connect with me<br/> via phone:
              01912-123456
              or email: admin@example.com
            </p>
            <div className="container">
              <center>
            <form style={{width:'90%'}}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your E-mail"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write a Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write a Message"
                ></textarea>
              </div>
              <button type="button" className="btn mx-auto d-block" style={{backgroundColor:'#00ffff', color:'white', width:'200px'}}>
                Sent Message
              </button>
            </form>
            </center>
            </div> 
     
          </div>
          <div className="col-md-6">
            <img src="images/contact/c1.jpg" alt="contact" className="mt-md-5 grl img-fluid mx-auto d-block" width="70%" height="500px" style={{borderRadius:'20px'}} />
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default Contact;

