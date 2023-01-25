import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1 className="text-light"><a href="index.html"><span>Ninestars</span></a></h1>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
        <li><NavLink className="nav-link scrollto active" to="/home">Home</NavLink></li>
        <li><NavLink className="nav-link scrollto" to="/about">About Us</NavLink></li>
        <li><NavLink className="nav-link scrollto" to="/services">Services</NavLink></li>
        <li><NavLink className="nav-link scrollto" to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink className="nav-link scrollto" to="/team">Team</NavLink></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
        <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
        <li><NavLink className="getstarted scrollto" to="/about">Get Started</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </>
  );
};

export default Header;
