import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Addons</div>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ShowEmp">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>ข้อมูลบุคคลกร</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Project/ShowProject">
            <i className="fas fa-fw fa-table"></i>
            <span>ข้อมูลโครงงานบริการวิชาการ</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/certificate/showCertificate">
            <i className="fas fa-fw fa-table"></i>
            <span>ใบประกาศ</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </>
  );
}

export default Sidebar;
