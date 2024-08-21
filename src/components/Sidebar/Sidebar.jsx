import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";
import useWindowWidth from "../useWindowWidth/useWindowidth";

const Sidebar = () => {
  const width = useWindowWidth();
  const [first, setfirst] = useState(true);
  const [isOpen, setIsOpen] = useState(width <= 992 ? false : true);

  useEffect(() => {
    if (width <= 992 && first) {
      setIsOpen(false);
    }
    if (width > 992 && first) {
      setIsOpen(true);
    }
  }, [width]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setfirst(false);
  };

  console.log(isOpen);
  return (
    <>
      <div className="top-head">
        <div className="logo-img">
          <img src="https://erp.silicon.ac.in/estcampus/images/logo/SITBBS_logo.jpg" />
        </div>
        <div className="int-wrap">
          <div className="ham" onClick={toggleSidebar}>
            <button className="toggle-btn">☰</button>
          </div>
          <div className="logo-text">
            Silicon Tech is a Unit of Silicon University
          </div>
        </div>
        <div className="nav-right-user">
          <div
            style={{ width: "2%", fontSize: "16px" }}
            className="icon-wrapper"
          >
            <i class="fa fa-bell-o"></i>
            <span class="notification-badge">312</span>
          </div>
          <div className="int-li" style={{}}>
            <i class="fa fa-graduation-cap" style={{}}></i>
            <span style={{ paddingLeft: "5%" }}>Grievance</span>
          </div>
          <div className="user-name">
            <img
              src="https://erp.silicon.ac.in:443/uploads/student_photo/SITBBS_B.TECH_2021-2025/EEE/21BEEG96/21BEEG96_16X16.jpg"
              style={{ width: "20px", height: "20px" }}
              alt="User Image"
            />
            <span style={{ paddingLeft: "2%" }}>RITESH TIWARY (Student)</span>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {isOpen && (
          <nav className={`sidebar`}>
            <ul>
              <li></li>
              <li>
                <div>
                  <i class="fa fa-fw fa-hotel"></i>
                  <span style={{ paddingLeft: "3px" }}>Hostel</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-fw fa-cog"></i>
                  <span style={{ paddingLeft: "3px" }}>Activity</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div>
                  <i class="fa fa-cubes"></i>
                  <span style={{ paddingLeft: "3px" }}>Academics</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div>
                  <i class="fa fa-wrench"></i>
                  <span style={{ paddingLeft: "3px" }}>Planning</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-futbol-o"></i>
                  <span style={{ paddingLeft: "3px" }}>Activity</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div>
                  <i class="fa fa-fw fa-book"></i>
                  <span style={{ paddingLeft: "3px" }}>DMS</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-fw fa-envelope"></i>
                  <span style={{ paddingLeft: "3px" }}>Inbox</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div>
                  <i class="fa fa-book"></i>
                  <span style={{ paddingLeft: "3px" }}>Library</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-fw fa-server"></i>
                  <span style={{ paddingLeft: "3px" }}>Transaction</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-fw fa-cubes"></i>
                  <span style={{ paddingLeft: "3px" }}>Report</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div>
                  <i class="fa fa-cutlery"></i>
                  <span style={{ paddingLeft: "3px" }}>Canteen</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-futbol-o"></i>
                  <span style={{ paddingLeft: "3px" }}>Activity</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div>
                  <i class="fa fa-hdd-o"></i>
                  <span style={{ paddingLeft: "3px" }}>Repository</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-newspaper-o"></i>
                  <span style={{ paddingLeft: "3px" }}>Student Handbook</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-shield"></i>
                  <span style={{ paddingLeft: "3px" }}>Anti Ragging</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
              <li>
                <div style={{ marginLeft: "20px" }}>
                  <i class="fa fa-wrench"></i>
                  <span style={{ paddingLeft: "3px" }}>Activity</span>
                </div>
                <i class="fa pull-right fa-angle-left"></i>
              </li>
            </ul>
          </nav>
        )}

        <div className="content">
          <header>
            <h1
              style={{
                fontSize: "25px",
                paddingLeft: "8px",
                fontWeight: "500",
              }}
            >
              Dashboard
            </h1>
          </header>
          <main style={{ paddingTop: "5px" }}>
            <Home />
          </main>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
