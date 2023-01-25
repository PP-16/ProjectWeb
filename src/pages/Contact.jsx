import React from "react";
import { Formik } from "formik";
import { ValidateContact } from "./validate-from/ValidateContact";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Contact us the get started</p>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  subject: "",
                  message: "",
                }}
                validateSchema={ValidateContact}
                // onSubmit={(values, { setSubmitting }) => {}}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit} className="php-email-form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      {errors.email && touched.email && errors.email}
                      <div className="form-group col-md-6">
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                      {errors.password && touched.password && errors.password}
                      <div className="form-group mt-3">
                        <input
                          type="text"
                          name="subject"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.subject}
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      {errors.subject && touched.subject && errors.subject}
                      <div className="form-group mt-3">
                        <textarea
                          type="text"
                          name="message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          className="form-control"
                          rows="10" 
                          placeholder="Message"
                        />
                      </div>
                      {errors.message && touched.message && errors.message}
                      <div className="text-center">
                        <button type="submit" disabled={isSubmitting}>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
              {/* <form action="forms/contact.php" method="post" role="form" className="php-email-form">
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
              </form> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
