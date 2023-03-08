import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import Select from "react-select";
import systemSetting from "../../data/system-setting.json";
import { DatePickerTH } from "../component/TextField";
import ShowData from "./ShowData";
import { getProject,deleteProject } from "../../Service/Project.Service";
import { ConfirmDialog } from "../../components/AlertDiolog";

const ShowProject = () => {
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
    showData(10, 1,"");
  }, []);

  const showData = async (pageSize, currentPage, projectName) => {
    let res = await getProject(pageSize, currentPage, projectName);
    if (res) {
      if (res.statusCode === 200) {
        setData(res.data);
        setPagin(res.pagin);
      }
    }
  };

  // function showData(search, pagesize, currentpage) {
  //   let res = getProject(search, pagesize, currentpage);
  //   console.log(res);
  //   setData(res.data);
  //   setPagin(res.pagin);
  // }

  const Delete = (code) => {
    ConfirmDialog(
      "question",
      "คุณต้องการลบข้อมูลใช่หรือไม่?",
      "",
      0,
      true,
      true
    ).then(async (result) => {
      if(result.isConfirmed){
        let res = await deleteProject(code)
        if(res.statusCode === 200){
          console.log("Deleted",code);
          showData(10,1,"")
        }else{
          console.log("can't delete")
        }
      }
    });
  };

  return (
    <div className="row">
      <div className="card mb-4 py-3 border-top-primary">
        <div className="card-body">
          <div className="row">
            <h6>
              <strong>ข้อมูลโครงการบริการวิชาการ</strong>
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
                      <label htmlFor="projectName">ชื่อโครงการ</label>
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
                      <label htmlFor="projectStatus">สถานะการดำเนินงาน</label>
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
                      <label htmlFor="years">ปี พ.ศ.</label>
                      <DatePickerTH
                        editable={false}
                        maxDate={new Date()}
                        onlyYearPicker
                        format="YYYY"
                        id="startYear"
                        value={
                          values.startYear
                            ? new Date((values.startYear - 543).toString())
                            : ""
                        }
                        name="startYear"
                        onChange={(date) => {
                          setFieldValue("startYear", date.format());
                        }}
                        errors={errors}
                        touched={touched}
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
                        showData(10, page, values.projectName);
                      }}
                      changePageSize={(pagesize) => {
                        showData(pagesize, 1, values.projectName);
                      }}
                      deleteData={(id) => Delete(id)}
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

export default ShowProject;
