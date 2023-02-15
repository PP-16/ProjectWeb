import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { json } from "react-router-dom";
import { ValidateContact } from "../../pages/validate-from/ValidateContact";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const FromEmp = () => {
  const { getRootProps, getInputProps } = useDropzone();
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <div className="card-body">
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
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
                    <div className="form-group col-md-3">
                      <label htmlFor="name">คำนำหน้าชื่อ(TH)</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">ชื่อ(TH)</label>
                      <input
                        value={values.name}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">นาสกุล(TH)</label>
                      <input
                        value={values.name}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">คำนำหน้าชื่อ(EN)</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">ชื่อ(EN)</label>
                      <input
                        value={values.name}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">นาสกุล(EN)</label>
                      <input
                        value={values.name}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="name">วันเดือนปีเกิด</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">อายุ</label>
                      <input
                        value={values.name}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">สัญชาติ</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="form-group col-md-2">
                      <label htmlFor="name">เลขที่</label>
                      <input
                        value={values.phone}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="name">หมู่ที่</label>
                      <input
                        value={values.email}
                        className="form-control"
                      />
                    </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">หมู่บ้านอาคาร</label>
                        <input
                          value={values.email}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">ชั้น</label>
                        <input
                          value={values.email}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">ตรอก/ซอย</label>
                        <input
                          value={values.email}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">ถนน</label>
                        <input
                          value={values.email}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">ค้นหาที่อยู่</label>
                        <input
                          value={values.email}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">
                          ตำบล/อำเภอ/จังหวัด/รหัสไปรษณีย์
                        </label>
                        <input
                          value={values.email}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">ตำแหน่งงาน</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">ชื่อโครงการ</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromEmp;
