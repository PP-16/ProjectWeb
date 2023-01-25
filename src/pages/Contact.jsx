import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { json } from "react-router-dom";
import { ValidateContact } from "./validate-from/ValidateContact";

const Contact = () => {
  return (
    <>
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
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  message: "",
                  name: "",
                  status: "",
                }}
                validationSchema={ValidateContact}
                onSubmit={(values) => {
                  let data = { ...values };
                  console.log("data : " + JSON.stringify(data));
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit} className="php-email-form">
                    <div className="row">
                      <div className="form-group col-md-12">
                        Status :
                        <Field
                          type="radio"
                          name="status"
                          value="นักศึกษา"
                          defaultChecked={values.status === "นักศึกษา"}
                          className={
                            errors.status && touched.status ? " is-invalid" : ""
                          }
                
                        />{" "}
                        <label>นักศึกษา</label>
                        <Field
                          type="radio"
                          name="status"
                          value="อาจารย์/บุคคลกร"
                          className={
                            errors.status && touched.status ? " is-invalid" : ""
                          }
                          defaultChecked={values.status === "นักศึกษา"}
                        />{" "}
                        <label>อาจารย์/บุคคลกร</label>
                        <Field
                          type="radio"
                          name="status"
                          value="บุคคลภายนอก"
                          defaultChecked={values.status === "นักศึกษา"}
                          className={
                            errors.status && touched.status ? " is-invalid" : ""
                          }
                        />{" "}
                        <label>บุคคลภายนอก</label>
                        <ErrorMessage
                          name="status"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Email</label>
                        <input
                          type="text"
                          name="email"
                          // onChange={handleChange}
                          onChange={(e) => {
                            setFieldValue(
                              "email",
                              e.target.value.replace(
                                /[^A-Za-z_.#?!@$%^&*0-9]/gi,
                                ""
                              )
                            );
                          }}
                          onBlur={handleBlur}
                          value={values.email}
                          className={
                            "form-control" +
                            (errors.email && touched.email ? " is-invalid" : "")
                          }
                          placeholder="Your email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label htmlFor="name">Your Password</label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                          placeholder="Your Password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "")
                          }
                          placeholder="Your Name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <label htmlFor="name">Message</label>
                        <textarea
                          type="text"
                          name="message"
                          rows={5}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          className={
                            "form-control" +
                            (errors.message && touched.message
                              ? " is-invalid"
                              : "")
                          }
                          placeholder="message"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div>
                        <button type="submit" className="text-center">
                          Submit
                        </button>
                        <button type="reset" className="resetcss">
                          Reset
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
