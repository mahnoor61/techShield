import React from 'react'
import '../styles/Nav.css';
export default function Navbar() {
  return  (
    <>
    <nav className="navbar navbar-expand-sm shadow-5-strong navbar-dark fixed-top">
  <a className="navbar-brand" href="/">
    <img src="images/navbar/logo.png" alt="logo" width="60%" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link ml-md-5" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact</a>
      </li>
      <button className="btn btn-outline-light mr-md-5 ml-md-5" type="button" id="navButton">METAVERSE</button>
      </ul>
  </div>
</nav>
</>
  );
}

