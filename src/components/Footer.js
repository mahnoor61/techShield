
import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted" style={{ backgroundColor: '#101010', padding: '20px 0' }}>
          <div className="col-md-4 text-center">
            <img src="images/navbar/logo.png" alt="logo" width="60%" className="img-fluid logo" />
          </div>
          <div className="col-md-4 social-icons text-center">
            <i className="fab fa-facebook mr-md-3"></i>
            <i className="fab fa-twitter mr-md-3"></i>
            <i className="fab fa-linkedin mr-md-3"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="col-md-4 text-center">
            <p className="reserved text-white">© 2022. All rights reserved by Tecshield.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
