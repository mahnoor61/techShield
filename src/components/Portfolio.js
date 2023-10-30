import React from "react";
import "../styles/Portfolio.css";
import { Link } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid" id="portfolio">
        <div className=" mb-md-5 d-flex w-100 h-100 justify-content-center align-items-center  justify-content-sm-center align-items-sm-center flex-wrap">
          <div>
            <h1 className="display-3 font-weight-bolder mt-md-5" id="top">
              Our Portfolio
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
                    <Link to="/portfolio" className="linkli active">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container h-100" style={{ backgroundColor: "191919" }}>
        <div className="row mt-md-5 ">
          <div className="col-md-4">
            <PortfolioCard
              title="Game Development"
              text="Portfolio Design6"
              but="Case Study"
              id="c1"
              className="portcard"
              to="/design6"
            />
          </div>
          <div className="col-md-4">
            <PortfolioCard
              title="Game Development"
              text="Portfolio Design5"
              but="Case Study"
              id="c2"
              className="portcard"
              to="/design5"
            />
          </div>
          <div className="col-md-4">
            <PortfolioCard
              title="Game Development"
              text="Portfolio Design4"
              but="Case Study"
              id="c3"
              className="portcard"
              to="/design4"
            />
          </div>
        </div>
        <div className="row  pt-md-5 pb-md-5">
          <div className="col-md-4">
            <PortfolioCard
              title="Game Development"
              text="Portfolio Design3"
              but="Case Study"
              id="c4"
              className="portcard"
              to="/design3"
            />
          </div>
          <div className="col-md-4">
            <PortfolioCard
              title="Game Development"
              text="Portfolio Design2"
              but="Case Study"
              id="c5"
              className="portcard"
              to="/design2"
            />
          </div>
          <div className="col-md-4">
            <PortfolioCard
              title="Game Development"
              text="Portfolio Design1"
              but="Case Study"
              id="c6"
              className="portcard"
              to="/design1"
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Portfolio;
