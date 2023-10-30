import React from "react";
import"../styles/Testimonal.css";
// import Navbar from "./Navbar";
export default function Testimonal() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid">
        <div className="row mt-md-5">
          <div className="col-md-12">
            <p id="testi" className="mt-md-5 text-center">
              Testimonials
            </p>
            <h1 className="text-center  text-white" id="client">
              OUR HAPPY CLIENTS
            </h1>
            <hr color="white" className="w-25" />
          </div>
        </div>
        <div className="container">
          <div className="row mt-md-5">
            <div className="col-md-6">
              <p className="text-muted">
                I´m very Happy! Razzaq made my idea come true , and he and his
                team works really fast and really listen to me. I had a great
                time working with Abdul Razzaq. If you have an Idea for a game
                or app i really recommend Razzaq94! You can Check out the
                drinking-game he made for me It´s called "Drink Up"
              </p>
              <div className="row mt-md-5">
                <img
                  src="images/testimonals/t1.png"
                  alt="t1"
                  className=" ml-md-5 rounded-circle"
                  width="10%"
                  height="10%"
                />
                <p className="text-muted  ml-md-3 mt-md-2 imgtext">
                  Shanekj <br />
                 <small>Norwa</small>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-muted">
                Razzaq94 was highly professional. He walked me through the whole
                process; even with questions outside the scope of the order, he
                was more than happy to provide his professional opinion and even
                send research info to help. The game came out perfectly, and he
                did revisions with no problem.
              </p>
              <div className="row mt-md-5">
                <img
                  src="images/testimonals/t2.png"
                  alt="t2"
                  className=" ml-md-5 rounded-circle"
                  width="10%"
                  height="10%"
                />
                <p className="text-muted  ml-md-3 mt-md-2 imgtext">
                  kkmmharper <br/><small>United States</small>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-md-5">
            <div className="col-md-6">
              <p className="text-muted">
                Difficult getting Apple store publication approval, but
                developer is working very hard on getting it through. Android
                version was easily published. He’s professional and delivery.
              </p>
              <div className="row mt-md-5">
                <img
                  src="images/testimonals/t3.png"
                  alt="t3"
                  className=" ml-md-5 rounded-circle"
                  width="10%"
                  height="10%"
                />
                <p className="text-muted  ml-md-3 mt-md-2 imgtext">
                stitches81
                <br />
                 <small>United States</small>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-muted">
                So far working with Razzaq94 is my best experience in Fiverr.
                He’s patient and smart, a good listener, makes things like I
                imagine it. I strongly believe that the final outcome would
                really be fantastic!
              </p>
              <div className="row mt-md-5">
                <img
                  src="images/testimonals/t4.png"
                  alt="t3"
                  className=" ml-md-5 rounded-circle"
                  width="10%"
                  height="10%"
                />
                <p className="text-muted  ml-md-3 mt-md-2 imgtext">
                    trungnguyen1211
                <br />
                 <small>Vietnam</small>
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-md-5">
            <div className="col-md-12">
              <button
                type="button"
                id="vit"
                className="mx-auto d-block mt-md-5 mb-md-5"
              >
                View All Testimonals
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
