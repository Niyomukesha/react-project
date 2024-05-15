import React from 'react';
import './landingpage.css'; 
import logoImage from '../images/looog.jpg'; 

const Portfolio = () => {
  return (
    <div className="main">
      <div className="container">
        <nav>
          <img src={logoImage} alt="logo" className="logo" />
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-text">
          <h1>Florence Niyomukesha</h1>
          <div className="para">I'm a web developer</div>
        </div>
      </div>
      <div className="icons">
        <i className="fab fa-twitter"></i><br />
        <i className="fab fa-facebook-f"></i><br />
        <i className="fab fa-linkedin-in"></i><br />
        <i className="fab fa-github"></i><br />
        <i className="fab fa-instagram"></i><br />
      </div>
    </div>
  );
};

export default Portfolio;
