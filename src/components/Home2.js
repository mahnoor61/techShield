import React from "react";
// import Navbar from './Navbar'
import"../styles/Home2.css";

export default function Home2() {
  return (
    <>
      <div className="container-fluid mt-md-5">
        {/* <Navbar/> */}
        <div className="row mt-md-5">
          <div className="col-md-12">
            <h5 className="text-center mt-md-5" id="h4">
              #TeamTecshield
            </h5>
            <h2 className="text-white text-center mt-md-4" id="wel">
              WELCOME TO TECSHIELD
            </h2>
            <hr className="w-25" color="white" />
          </div>
        </div>

        <div className="container mt-md-5">
          {/* <div className="col-md-2"></div> */}
          <div className="row mt-md-5">
            <div className="col-md-5">
              <img
                src="images/services/GameDevelopment.png"
                alt="game"
                className="img-fluid game ml-md-5 mb-md-5"
                width="100%"
              />
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12">
                  <p className="ASSS">About Us</p>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-muted ml-md-5" id="paragrapgh">
                      Tecshield is by far the best unity game development
                      company in the market. What that really means is that
                      we’re the best at what we do and our goal is to provide
                      you the best services in the Game Development Industry
                    </p>
                  </div>
                </div>
                <div className="row mt-md-3">
                  <div className="col-md-4">
                    <p className="ml-md-5 AS">
                      HAPPY
                      <br /> CLIENTS
                    </p>
                    <h1 className="ml-md-5 ASS">800+</h1>
                  </div>
                  <div className="col-md-4">
                    <p className="ml-md-3 AS font-weight-smaller">
                      YEARS OF EXPERIENCE
                    </p>
                    <h1 className="ml-md-3 ASS">009+</h1>
                  </div>
                  <div className="col-md-4">
                    <p className="ml-md-3 AS">COMPLETED PROJECTS</p>
                    <h1 className="ml-md-3 ASS">1000+</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
