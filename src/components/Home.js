import React from "react";
import"../styles/Home.css";
import Home2 from "./Home2";
import Services from "./Services";
import Features from "./Features";
import Gallery from "./Gallery";
import Testimonal from "./Testimonal";
import Port from "./Port";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        id="background"
      >
        <div
          className="Homecard"
          style={{ backgroundColor: "transparent" }}
          id="homecard"
        >
          <div className="card-body">
            <h5 className="card-title text-center" id="tec">
              # Team TechShield
            </h5>
            <h1 className="text-white text-center" id="ideas">
              Bring Ideas To Reality
            </h1>
            <p className="card-text text-white text-center" id="growing">
              Faster Growing IT Company
            </p>
            <button className="btn mx-auto d-block" type="button" id="b2">
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </div>
        <Home2/>
        <Services/>
        <Features/>
        <Port/>
        <Gallery/>
        <Testimonal/>
        {/* <Footer/> */}
    </>
  );
}
