import React  from "react";

const ContactTest =()=>{
    return (
<div>
<section id="contact" className="contact">
        <div className="container">
  
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Contact us the get started</p>
          </div>
    
          <div className="col-lg-12 d-flex align-items-stretch" >
              <div className="info d-flex">
                <div className="address m-auto">
                  <i className="bi bi-geo-alt "></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
  
                <div className="email m-auto">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
  
                <div className="phone m-auto">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
  
              </div>
  
            </div>
          <div className="row">  
            <div className="col-lg-12 mt-5 mt-lg-5 d-flex align-items-stretch m-auto" >
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Message</label>
                  <textarea className="form-control" name="message" rows="10" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
</div>
    )
}

export default ContactTest;