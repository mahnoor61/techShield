import React from 'react'
export default function Footer() {
  return (
    <>
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <a className="navbar-brand" href="/">
    <img src="images/navbar/logo.png" alt="logo" width="60%" className="ml-md-5"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link ml-md-5" href="/"><i className="fa-brands fa-facebook ml-md-5"></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/"><i className="fa-brands fa-twitter"></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/"><i className="fa-brands fa-linkedin"></i></a>
      </li>
      <li className="nav-item"><a className="nav-link" href="/"><i className="fa-brands fa-instagram"></i></a></li>
    
      </ul>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
            <a href="/" className="nav-link">© 2022. All rights reserved by Tecshield.</a>
        </li>

      </ul>
  </div>
</nav> 
    </>
  )
}
