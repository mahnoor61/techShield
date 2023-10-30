import React from "react";
import '../styles/d5.css';
const Design5 = ()=>{
return(
    <>
    <div className="container-fluid">
        <div className="row" id="d5Back">
          <div className="d-flex justify-content-center align-items-center w-100 flex-column">
            <h1 id="pd6" className="font-weight-bolder">
              Portfolio-Design-5
            </h1>
            <p className="text-muted mt-md-5 ml-md-5">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commod viverra
              maecenas accumsan lacus vel facilisis. ut labore et dolore […]
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-md-5" id="main">
        <div className="container">
          <div className="d-flex flex-column">
            <hr className="text-muted hr-line" />
            <p className="text-muted text-center">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form.
            </p>
            <p className="text-muted text-center mt-md-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br /> Quis ipsum suspendisse ultrices gravida. Risus commod
              viverra maecenas accumsan lacus vel facilisis. ut labore et dolore
              <br /> magna aliqua.
            </p>
          </div>
          <div className="d-flex mt-md-5 justify-content-center justify-content-around">
            <div>
              <p className="text-muted">Client Name</p>
              <h6 className="text-white">John Doe</h6>
            </div>
            <div>
              <p className="text-muted">Release Date</p>
              <h6 className="text-white">April 10, 2019</h6>
            </div>
            <div>
              <p className="text-muted">Project Types</p>
              <h6 className="text-white">Android / IOS Game</h6>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-md-5">
            <i className="fab fa-facebook mr-md-3"></i>
            <i className="fab fa-twitter mr-md-3"></i>
            <i className="fab fa-linkedin mr-md-3"></i>
          </div>

          <div className="row mt-md-5">
            <div className="col-md-12">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/XAeJNnyHt28?si=l7VP_rVIALhJgxvs"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column mt-md-5">
            <h5 id="rw">Related Work</h5>
            <h1 className="text-white" id="omp">
              Our More Projects
            </h1>
          </div>

          <div className="row mt-md-5 mb-md-5">
            <div className="col-md-4">
              <div>
                <img
                  src="images/portfolio/p1.jpg"
                  alt="design"
                  className="card-img-top"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column mt-md-4">
                <h4 className="text-white">Portfolio-Design-6</h4>
                <p className="text-muted">Game Development</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img
                  src="images/design/pd2.jpg"
                  alt="design"
                  className="card-img-top"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column mt-md-4">
                <h4 className="text-white">Portfolio-Design-4</h4>
                <p className="text-muted">Game Development</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img
                  src="images/design/pd3.jpg"
                  alt="design"
                  className="card-img-top"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center flex-column mt-md-4">
                <h4 className="text-white">Portfolio-Design-3</h4>
                <p className="text-muted">Game Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
)
};
export default Design5;