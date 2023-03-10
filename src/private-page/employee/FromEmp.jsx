import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { json } from "react-router-dom";
import { ValidateContact } from "../../pages/validate-from/ValidateContact";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SearchAddress } from "../component/SearchAddress";

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
                      <label htmlFor="name">????????????????????????????????????(TH)</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">????????????(TH)</label>
                      <input value={values.name} className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">??????????????????(TH)</label>
                      <input value={values.name} className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">????????????????????????????????????(EN)</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">????????????(EN)</label>
                      <input value={values.name} className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">??????????????????(EN)</label>
                      <input value={values.name} className="form-control" />
                    </div>

                    <div className="form-group col-md-3">
                      <label htmlFor="name">??????????????????????????????????????????</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">????????????</label>
                      <input value={values.name} className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="name">?????????????????????</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                      />
                    </div>
                    <hr />
                    <div className="row">
                      <div className="form-group col-md-2">
                        <label htmlFor="name">??????????????????</label>
                        <input value={values.phone} className="form-control" />
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="name">?????????????????????</label>
                        <input value={values.email} className="form-control" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">???????????????????????????????????????</label>
                        <input value={values.email} className="form-control" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">????????????</label>
                        <input value={values.email} className="form-control" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">????????????/?????????</label>
                        <input value={values.email} className="form-control" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">?????????</label>
                        <input value={values.email} className="form-control" />
                      </div>
                      <div className="form-group col-md-4">
                      <SearchAddress
                        title="????????????????????????????????????"
                        placeholder="- ???????????????????????????????????? -"
                        returnAddress={(e) => {
                          setFieldValue(
                            "addressHomeFullAddress",  ` ???.${e.subdistrictName} ???.${e.districtName} ???.${e.provinceName} ${e.postCode} ` 
                          );
                        }}
                        className="form-control pl-5" 
                      />
                    </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">
                          ????????????/???????????????/?????????????????????/????????????????????????????????????
                        </label>
                        <input value={values.addressHomeFullAddress} className="form-control" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">??????????????????????????????</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="name">?????????????????????????????????</label>
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
