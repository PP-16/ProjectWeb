import React, { Fragment, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { json } from "react-router-dom";
import { ValidateContact } from "../../pages/validate-from/ValidateContact";
import Select from "react-select";
import { NavLink } from "react-router-dom";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const ShowEmp = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Fragment>
        <div className=" text-end form-group col-md-12">
            <NavLink to="/from">
        <button type="button" class="btn btn-outline-primary">เพิ่มใหม่</button>
        </NavLink>
        </div>
      <div className="card " >
        <h5 className="card-header">Search</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <Formik
            initialValues={{
              name: "",
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
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ-นามสกุล</label>
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
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">ตำแหน่ง</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">โครงการ</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                  <div
                      className="form-group col-md-2 text-center"
                      style={{ marginTop: "29px" }}
                    >
                      <button type="submit" className="btn btn-primary btn-md m-3">
                        ค้นหา
                      </button>
                      <button type="reset" className="btn btn-danger btn-md">
                        ล้างข้อมูล
                      </button>
                    </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <hr />
      <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ShowEmp;
