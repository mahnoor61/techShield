import React from 'react'
import css from '../styles/Services.css';
import Navbar from './Navbar';
import ServiceCard from './ServiceCard';
export default function Services() {

  return (
    <>
   <Navbar/>
   <div className="container-fluid mb-md-5">
      <div className="row mt-md-5">
        <div className="col-md-12">
        <p id="services" className="mt-md-5 text-center">Our Services</p>
        <h3 className='text-center  text-white' id="provide">What We Provide</h3>
        <hr color="white" width="200px"/>
        </div>
      </div>
      <div className="row mt-md-5">
        <div className="col-md-4">
          <ServiceCard 
          heading="GAME DEVELOPMENT"
          detail="Game development, production, or design is a process that starts from an idea or concept. Often the idea is based on a modification of an existing game concept."
          image="images/services/GameDevelopment.png" alt="game"/>
        </div>
        <div className="col-md-4">
 
        <ServiceCard heading="HYPER CASUAL GAMES"
        detail="Hyper-casual games are mobile video games which are easy-to-play, and usually free-to-play, they also feature very minimalistic user interfaces."
        image="images/services/two.jpg" alt="two"
        />
        </div>
        <div className="col-md-4">
          <ServiceCard
          heading="GAMIFICATION"
          detail="Gamification is adding game mechanics into nongame environments, like a website, online community or learning management system to increase participation."
          image="images/services/three.jpg" alt="three"
          />
  
        </div>
      </div>
      <div className="row mt-md-5">
        <div className="col-md-4">
   
      <ServiceCard
      heading="MOBILE APPS"
      detail="Mobile app based games where players interact with mind blowing UI and UX while enjoying the outstanding gameplay with enhanced up to date features."
      image="images/services/four.jpg" alt="four"/>
      </div>
        <div className="col-md-4">
    
      <ServiceCard
      heading="AUGMENTED REALITY"
      detail="Augmented reality (AR) is an enhanced version of the real physical world, achieved through the use of digital visual elements and delivered via technology."
      image="images/services/five.png" alt="five"
      />
</div>
        <div className="col-md-4">
    
        <ServiceCard
        heading="VIRTUAL REALITY"
        detail="Virtual reality (VR) refers to a computer-generated simulation in which a person can interact within an artificial three-dimensional environment using E-devices."
        image="images/services/six.jpg" alt="six"/>
        </div>
        </div>
      <div className="row mt-md-5">
        <div className="col-md-4">
 
      <ServiceCard
      heading="MULTIPLAYER"
      detail="Once you have done this, you can enable the multiplayer gaming and let your users play the games together over the internet and have the ultimate gaming experience"
      image="images/services/Seven.jpg" alt="seven"
      />
</div>
        <div className="col-md-4">
    
        <ServiceCard
        heading="WEB DEVELOPMENT"
        detail="Web development is the work involved in developing a Web site for the Internet or an intranet. It ranges from simple front page to a complete web based application."
        image="images/services/eight.jpg" alt="eight"
        />
        </div>
        <div className="col-md-4">
    
        <ServiceCard
        heading="WORDPRESS"
        detail="WordPress is a content management system (CMS) by using which we will make any website fitting your business, blog, portfolio, or online store."
        image="images/services/nine.jpg" alt="nine"
        />
        </div>
      </div>
      </div>
    </>
  )
}