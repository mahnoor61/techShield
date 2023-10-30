import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  
  const {navbarLinks: items} = props;

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm shadow-5-strong navbar-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <img src="images/navbar/logo.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {
            items.map((item, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link ml-md-5" to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))
            }
            <a
              className="btn btn-outline-light mr-md-5 ml-md-5"
              type="button"
              id="navButton"
              href="/"
            >
              METAVERSE
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
