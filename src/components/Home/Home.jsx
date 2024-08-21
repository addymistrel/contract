import React from "react";
import "./Home.css";

function Home() {
  function openPopup(url, title, width, height) {
    const left = 0;
    const top = (window.innerHeight - height) / 2;

    window.open(
      url,
      title,
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );
  }

  const handlePopupClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    openPopup("/result", "PopupWindow", 1000, window.innerHeight);
  };

  return (
    <>
      <div class="cards">
        {/* 1 */}
        <div
          className="card-item bg-red-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Faculty Advisor</div>
            <div className="text">NAME : MR Dhananjay Tripathy</div>
            <div className="text">CONTACT NUMBER : 7504246759</div>
          </div>
          <div className="bottom" style={{ justifyContent: "space-between" }}>
            <div className="item1">
              <span>Interactions</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <div className="item1">
              <span>Raise an Issue</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <div className="item1">
              <span>SOP</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-user"></i>
          </div>
        </div>
        {/* 2 */}
        <div
          className="card-item bg-aqua-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Academics</div>
            <div className="text">Regd no. - 2101209359</div>
            <div className="text">PROGRAM - B.TECH , Semester - 4</div>
            <div className="text">Branch - EEE , Section - B</div>
          </div>
          <div className="bottom">
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-institution"></i>
          </div>
        </div>
        {/* 3 */}
        <div
          className="card-item bg-yellow-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Time Table</div>
            <div
              className="text"
              style={{ textAlign: "center", paddingTop: "20px" }}
            >
              <button
                type="button"
                style={{
                  backgroundColor: " #FFB829",
                  borderColor: "#C39100",
                  color: "#FFF",
                }}
                class="btn btn-success"
              >
                EEE (B)
              </button>
            </div>
          </div>
          <div className="bottom">
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-calendar"></i>
          </div>
        </div>
        {/* 4 */}
        <div
          className="card-item bg-purple-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Attendance</div>
            <div className="text">Subjects - 0</div>
            <div className="text">
              0 to 79% - <span style={{ color: "red" }}>11</span>
            </div>
            <div className="text">
              80 to 100% - <span style={{ color: "#12e412" }}>0</span>
            </div>
          </div>
          <div className="bottom">
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-user-plus"></i>
          </div>
        </div>
        {/* 5 */}
        <div
          className="card-item bg-blue-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Exam Schedule</div>
            <div className="text">Today - 0</div>
            <div className="text">Tomorrow - 0</div>
          </div>
          <div
            className="bottom"
            style={{ justifyContent: "center", gap: "10%" }}
          >
            <div className="item1">
              <span>Autonomous Exam</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <div className="item1">
              <span>Class Test Exam</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-graduation-cap"></i>
          </div>
        </div>
        {/* 6 */}
        <div
          className="card-item bg-red-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Result</div>
          </div>
          <div
            className="bottom"
            onClick={handlePopupClick}
            style={{ cursor: "pointer" }}
          >
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-certificate"></i>
          </div>
        </div>
        {/* 7 */}
        <div
          className="card-item bg-yellow-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Library</div>
            <div className="text">Books with me - 0</div>
            <div className="text">To be returned today - 0</div>
            <div className="text">To be returned this week - 0</div>
          </div>
          <div className="bottom">
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-book"></i>
          </div>
        </div>
        {/* 8 */}
        <div
          className="card-item bg-maroon-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Hostel</div>
            <div className="text">Not Registered</div>
          </div>
          <div className="bottom">
            <div className="item1">
              <span>Apply Leave</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-bed"></i>
          </div>
        </div>
        {/* 9 */}
        <div
          className="card-item bg-green-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Dues</div>
            <div className="text">Total Dues - 154046.50</div>
          </div>
          <div
            className="bottom"
            style={{ justifyContent: "center", gap: "10%" }}
          >
            <div className="item1">
              <span>Pay Online</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <div className="item1">
              <span>Print Receipt</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-money"></i>
          </div>
        </div>
        {/* 10 */}
        <div
          className="card-item bg-red-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Canteen</div>
          </div>
          <div className="bottom" style={{ justifyContent: "center" }}>
            <div className="item1">
              <span>Registration</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-cutlery"></i>
          </div>
        </div>
        {/* 11 */}
        <div
          className="card-item bg-aqua-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Online Quiz Exam</div>
          </div>
          <div className="bottom" style={{ justifyContent: "center" }}>
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-pencil"></i>
          </div>
        </div>
        {/* 12 */}
        <div
          className="card-item bg-aqua-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Online Written Exam</div>
          </div>
          <div className="bottom" style={{ justifyContent: "center" }}>
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-pencil"></i>
          </div>
        </div>
        {/* 13 */}
        <div
          className="card-item bg-green-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Profile</div>
            <div className="text">Name - RITESH TIWARY</div>
            <div className="text">Mobile No. - 6370761840</div>
            <div className="text">
              Email Id -{" "}
              <span style={{ color: "yellow" }}>riteshtiwary297@gmail.com</span>
            </div>
          </div>
          <div className="bottom" style={{ justifyContent: "center" }}>
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-user"></i>
          </div>
        </div>
        {/* 14 */}
        <div
          className="card-item bg-green-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Holidays</div>
            <div className="text">Leave Year - 2024 - 25</div>
            <div className="text">Total Holiday - 25</div>
          </div>
          <div className="bottom" style={{ justifyContent: "center" }}>
            <div className="item1">
              <span>View List</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-user"></i>
          </div>
        </div>
        {/* 15 */}
        <div
          className="card-item bg-purple-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Course Feedback</div>
            <div className="text" style={{ textAlign: "center" }}>
              Over
            </div>
            <div className="text" style={{ textAlign: "center" }}>
              START: <span style={{ fontWeight: "600" }}>25-May-2024</span> END:{" "}
              <span style={{ fontWeight: "600" }}>31-May-2024</span>
            </div>
          </div>
          <div className="bottom" style={{ justifyContent: "center" }}>
            <div className="item1">
              <span>Course Feedback</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-comment"></i>
          </div>
        </div>
        {/* 15-A */}
        <div
          className="card-item bg-purple-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Feedback</div>
            <div className="text" style={{ textAlign: "center" }}>
              Over
            </div>
            <div className="text" style={{ textAlign: "center" }}>
              START: <span style={{ fontWeight: "600" }}>14-May-2024</span> END:{" "}
              <span style={{ fontWeight: "600" }}>30-May-2024</span>
            </div>
          </div>
          <div className="bottom" style={{ justifyContent: "space-between" }}>
            <div className="item1">
              <span>Feedback</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <div className="item1">
              <span>FA Feedback</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-comment"></i>
          </div>
        </div>
        {/* 16 */}
        <div
          className="card-item bg-purple-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">
              Student Satisfaction Survey Feedback
            </div>
            <div className="text" style={{ textAlign: "center" }}>
              Over
            </div>
            <div className="text" style={{ textAlign: "center" }}>
              START: <span style={{ fontWeight: "600" }}>25-May-2024</span> END:{" "}
              <span style={{ fontWeight: "600" }}>31-May-2024</span>
            </div>
          </div>
          <div className="bottom" style={{ justifyContent: "center" }}>
            <div className="item1">
              <span>SSS Feedback</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-comment"></i>
          </div>
        </div>
        {/* 17 */}
        <div
          className="card-item bg-maroon-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Practice School</div>
          </div>
          <div className="bottom">
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
          <div className="icon">
            <i className="fa fa-fw fa-user"></i>
          </div>
        </div>
        {/* 18 */}
        <div
          className="card-item bg-blue-gradient"
          style={{
            background:
              "-moz-linear-gradient(center bottom , #F56954 0%, #6E2318 100%) repeat scroll 0% 0% transparent !important",
          }}
        >
          <div className="upper">
            <div className="header-text">Official Mail</div>
            <div className="text">Email Id:-eee.21beeg96@silicon.ac.in</div>
            <div className="text">Password:- ocjmknwh</div>
          </div>
          <div className="bottom" style={{ justifyContent: "center" }}>
            <div className="item1">
              <span>More info</span>
              <i className="fa fa-arrow-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
