import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import Select from "react-select";
import systemSetting from "../../data/system-setting.json";
import { DatePickerTH } from "../component/TextField";
import ShowData from "./ShowData";
import { getProject } from "../../Service/Project.Service";
import { ConfirmDialog } from "../../components/AlertDiolog";

function ShowCertificate() {
    const projectStatus = systemSetting.projectStatus;
    const [selectedOption, setSelectedOption] = useState(null);
  
    const [data, setData] = useState([]);
    const [pagin, setPagin] = useState({
      totalrow: 0,
      pagesize: 10,
      currentpage: 1,
      totalpage: 1,
    });
    useEffect(() => {
      showData("", 10, 1);
    }, []);
  
    function showData(search, pagesize, currentpage) {
      let res = getProject(search, pagesize, currentpage);
      console.log(res);
      setData(res.data);
      setPagin(res.pagin);
    }
  
    const Delete = (code) => {
      ConfirmDialog(
        "question",
        "คุณต้องการลบข้อมูลใช่หรือไม่?",
        "",
        0,
        true,
        true
      ).then(async (result) => {
        console.log("55:",code);
      });
    };
  
    return (
      <div className="row">
        <div className="card mb-4 py-3 border-top-primary">
          <div className="card-body">
            <div className="row">
              <h6>
                <strong>ข้อมูลใบประกาศ</strong>
              </h6>
            </div>
            <hr />
  
            {/* สำหรับค้นหา */}
            <div className="row">
              <Formik
                initialValues={{
                  projectName: "",
                  projectStatus: "",
                }}
                onSubmit={(v) => {
                  console.log("data : ", v.projectName);
                  showData(v.projectName);
                }}
              >
                {({ values, setFieldValue, errors, touched }) => (
                  <Form>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <label htmlFor="projectName">ชื่อ-นามสกุล</label>
                        <input
                          className="form-control"
                          type="text"
                          name="projectName"
                          onChange={(e) =>
                            setFieldValue("projectName", e.target.value)
                          }
                        />
                      </div>
  
                      <div className="form-group col-md-2">
                        <label htmlFor="projectStatus">ชื่อโครงการ</label>
                        <Select
                          placeholder="- เลือก -"
                          name="projectStatus"
                          options={projectStatus}
                          value={selectedOption}
                          onChange={setSelectedOption}
                          getOptionLabel={(option) => option.status}
                          getOptionValue={(option) => option.code}
                        />
                      </div>
  
                      <div className="form-group col-md-2">
                        <label htmlFor="years">วันที่อบรม</label>
                        <DatePickerTH
                          editable={false}
                          format="DD/MM/YYYY"
                          errors={errors}
                          touched={touched}
                          id="startYear"
                          maxDate={new Date()}
                          value={values.TrainingDate}
                          name="TrainingDate"
                          onChange={(date) => {
                            setFieldValue("TrainingDate", date.format());
                          }}
                        />
                      </div>
  
                      <div
                        className="form-group col-md-2 text-center"
                        style={{ marginTop: "29px" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-primary btn-md m-2"
                        >
                          ค้นหา
                        </button>
                        <button type="reset" className="btn btn-secondary btn-md">
                          ล้างข้อมูล
                        </button>
                      </div>
                    </div>
  
                    <div className="row">
                      <ShowData
                        data={data}
                        pagin={pagin}
                        changePage={(page) => {
                          showData(values.projectName, pagin.pagesize, page);
                        }}
                        changePageSize={(pagesize) => {
                          showData(values.projectName, pagesize, 1);
                        }}
                        deleteData={(id)=>Delete(id)}
                      />
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

export default ShowCertificate