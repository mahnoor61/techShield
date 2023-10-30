
import React from 'react';
import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';
function PortfolioCard(props) {
  return (
    <>
      <div className="card portCard portcard" id={props.id}>
        <div className="card-body">
          <h4 className="card-title text-white">{props.title}</h4>
          <p className="card-text text-white">{props.text}</p>
          <Link className="card-link btn btn-outline-light" to={props.to}>
            {props.but}
          </Link>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
