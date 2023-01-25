import React from "react";
import imgabout from '../assets/img/about-img.svg'

const About = () => {
  return (
<div>
<section id="about" className="about">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
              <img
                src={imgabout}
                className="img-fluid"
                alt=""
    
              />
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6" >
                  <i className="bx bx-receipt"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
                <div className="col-md-6" >
                  <i className="bx bx-cube-alt"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
  );
};

export default About;
