import React, { Fragment } from "react";
import Pagination from "react-js-pagination";
import { NavLink } from "react-router-dom";

function ShowData({ data, pagin, changePage, changePageSize, deleteData }) {
  return (
    <Fragment>
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <select
              value={pagin}
              className="form-control form-select"
              onChange={(e) => {
                changePageSize(parseInt(e.target.value));
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <div>
            <NavLink to="/Project/create">
            <i className="fa fa-plus-circle pr-1"></i>
                เพิ่ม
            </NavLink>
          </div>
        </div>
      </div>

      <div className="table-responsive mt-2">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อโครงการ</th>
              <th>ปี พ.ศ.</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  {(pagin.currentpage - 1) * pagin.pagesize + (index + 1)}
                </td>
                <td>{item.project_name}</td>
                <td></td>
                <td>
                  <button class="btn btn-warning btn-circle btn-sm p-3">
                    <i class="fas fa-pen"></i>
                  </button>
                  <button
                    class="btn btn-danger btn-circle btn-sm p-3"
                    onClick={() => deleteData(item.code)}
                  >
                    <i class="fas fa-trash "></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between">
          <div>จำนวน {pagin.totalrows} รายการ</div>
          <div>
            <Pagination
              activePage={pagin.currentpage}
              itemsCountPerPage={pagin.pagesize}
              totalItemsCount={pagin.totalrows}
              pageRangeDisplayed={pagin.totalpage}
              onChange={(page) => {
                changePage(page);
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ShowData;
