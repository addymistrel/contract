import React, { useState } from "react";

function Result() {
  const [activeState, setActiveState] = useState(1);
  return (
    <>
      <div style={{ display: "flex", gap: "2%", fontSize: "16px" }}>
        <div
          style={{
            borderTop: `${
              activeState === 1 ? "4px solid #3c8dbc" : "4px solid transparent"
            }`,

            cursor: "pointer",
          }}
          onClick={() => setActiveState(1)}
        >
          <a
            href="#"
            style={{
              textAlign: "center",
              textDecoration: "none",
              color: `${activeState === 1 ? "#3c8dbc" : "#555555"}`,
            }}
          >
            Semester Result
          </a>
        </div>
        <div
          style={{
            borderTop: `${
              activeState === 2 ? "4px solid #3c8dbc" : "4px solid transparent"
            }`,

            cursor: "pointer",
          }}
          onClick={() => setActiveState(2)}
        >
          <a
            href="#"
            style={{
              textAlign: "center",
              textDecoration: "none",
              color: `${activeState === 2 ? "#3c8dbc" : "#555555"}`,
            }}
          >
            Exam Result
          </a>
        </div>
      </div>
      <div
        className="panel-body"
        id="ShowSemesterResult"
        style={{ padding: "20px" }}
      >
        <div
          style={{
            background: "#4a8f00",
            display: "flex",
            justifyContent: "center",
            color: "white",
            alignItems: "center",
          }}
        >
          <h3 style={{ paddingTop: "0.5%" }}>SEMESTER RESULT</h3>
        </div>
        <div
          className="row"
          style={{ padding: "20px 0px", width: "80%", margin: "0px auto" }}
        >
          <div className="col-sm-10 col-sm-offset-1">
            <button
              type="button"
              className="btn btn-success pull-right"
              id="btnReport"
              name="btnReport"
              onclick="Final_Semester_Result_pdf_Download('SITBBS21BEEG96')"
            >
              <i className="fa fa-fw fa-download" />
              &nbsp;&nbsp;Download
            </button>
          </div>
        </div>
        <div
          style={{
            width: "80%",
            height: 600,
            border: "3px solid rgb(0, 0, 0)",
            margin: "10px auto",
          }}
        >
          <table style={{ width: "100%" }}>
            <tbody>
              <tr style={{ backgroundColor: "rgb(248, 176, 68)" }}>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px 0px",
                    borderBottom: "1px solid rgb(0, 0, 0)",
                  }}
                >
                  SEMESTER - 1
                </th>
              </tr>
            </tbody>
          </table>
          <table style={{ width: "100%", margin: "15px 0px" }}>
            <tbody>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>
                  Student Roll No :{" "}
                </td>
                <td
                  style={{
                    fontWeight: 800,
                    fontFamily: "arial",
                    color: "rgb(0, 48, 255)",
                  }}
                >
                  21BEEG96
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>
                  Student Name :{" "}
                </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  RITESH TIWARY
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>Course : </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  Bachelor of Technology
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>Branch : </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  Electrical &amp; Electronics Engineering
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              width: "90%",
              border: "1px solid #000",
              borderCollapse: "collapse",
              margin: "0 auto",
            }}
          >
            <tbody>
              <tr
                style={{
                  backgroundColor: "rgb(86, 86, 86)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Slno
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Paper Code
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Paper Name
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Credit
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Grade
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-BS-002
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ENGINEERING CHEMISTRY
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  C
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-BS-005
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ENGINEERING MATHEMATICS-I
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  B
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-MC-001
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  CONSTITUTION OF INDIA
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  0
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  C
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  4
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTCS-T-ES-001
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  COMPUTER PROGRAMMING
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  5
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEC-T-ES-001
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BASIC ELECTRONICS ENGINEERING
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  C
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  6
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  IPT
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  INDUCTION PROGRAM
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  0
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  7
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-P-BS-003
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ENGINEERING CHEMISTRY LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-P-ES-004
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ENGINEERING GRAPHICS
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  9
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTCS-P-ES-002
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  COMPUTER PROGRAMMING LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  10
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEC-P-ES-002
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BASIC ELECTRONICS ENGINEERING LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              backgroundColor: "rgb(104, 218, 255)",
              color: "rgb(5, 26, 255)",
              marginTop: 30,
              width: "40%",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <tbody>
              <tr>
                <th
                  style={{
                    padding: "5px 30px",
                    textAlign: "center",
                    borderRight: "4px dashed rgb(255, 255, 255)",
                  }}
                >
                  SGPA &nbsp;&nbsp;:&nbsp;&nbsp;5.88
                </th>
                <th style={{ padding: "0px 30px" }}>
                  CGPA &nbsp;&nbsp;:&nbsp;&nbsp;5.88
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{
            width: "80%",
            height: 600,
            border: "3px solid rgb(0, 0, 0)",
            margin: "10px auto",
          }}
        >
          <table style={{ width: "100%" }}>
            <tbody>
              <tr style={{ backgroundColor: "rgb(248, 176, 68)" }}>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px 0px",
                    borderBottom: "1px solid rgb(0, 0, 0)",
                  }}
                >
                  SEMESTER - 2
                </th>
              </tr>
            </tbody>
          </table>
          <table style={{ width: "100%", margin: "15px 0px" }}>
            <tbody>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>
                  Student Roll No :{" "}
                </td>
                <td
                  style={{
                    fontWeight: 800,
                    fontFamily: "arial",
                    color: "rgb(0, 48, 255)",
                  }}
                >
                  21BEEG96
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>
                  Student Name :{" "}
                </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  RITESH TIWARY
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>Course : </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  Bachelor of Technology
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>Branch : </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  Electrical &amp; Electronics Engineering
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              width: "90%",
              border: "1px solid #000",
              borderCollapse: "collapse",
              margin: "0 auto",
            }}
          >
            <tbody>
              <tr
                style={{
                  backgroundColor: "rgb(86, 86, 86)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Slno
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Paper Code
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Paper Name
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Credit
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Grade
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-BS-006
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ENGINEERING PHYSICS{" "}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-BS-013
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ENGINEERING MATHEMATICS-II
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  B
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-HS-099
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  COMMUNICATIVE &amp; TECHNICAL ENGLISH
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  C
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  4
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-MC-008
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ENVIRONMENTAL SCIENCE AND ENGINEERING
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  0
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  5
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTCS-T-ES-003
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  DATA STRUCTURES AND ALGORITHMS{" "}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  D
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  6
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-T-ES-001
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BASIC ELECTRICAL ENGINEERING
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  B
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  7
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-P-HS-011
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  COMMUNICATIVE &amp; TECHNICAL ENGLISH LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTCS-P-ES-004
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  DATA STRUCTURES &amp; ALGORITHMS LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  9
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-P-BS-007
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ENGINEERING PHYSICS LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  10
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-P-ES-009
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  MANUFACTURING PRACTICES
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  11
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-P-ES-002
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BASIC ELECTRICAL ENGINEERING LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              backgroundColor: "rgb(104, 218, 255)",
              color: "rgb(5, 26, 255)",
              marginTop: 30,
              width: "40%",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <tbody>
              <tr>
                <th
                  style={{
                    padding: "5px 30px",
                    textAlign: "center",
                    borderRight: "4px dashed rgb(255, 255, 255)",
                  }}
                >
                  SGPA &nbsp;&nbsp;:&nbsp;&nbsp;6.47
                </th>
                <th style={{ padding: "0px 30px" }}>
                  CGPA &nbsp;&nbsp;:&nbsp;&nbsp;6.20
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{
            width: "80%",
            height: 600,
            border: "3px solid rgb(0, 0, 0)",
            margin: "10px auto",
          }}
        >
          <table style={{ width: "100%" }}>
            <tbody>
              <tr style={{ backgroundColor: "rgb(248, 176, 68)" }}>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px 0px",
                    borderBottom: "1px solid rgb(0, 0, 0)",
                  }}
                >
                  SEMESTER - 3
                </th>
              </tr>
            </tbody>
          </table>
          <table style={{ width: "100%", margin: "15px 0px" }}>
            <tbody>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>
                  Student Roll No :{" "}
                </td>
                <td
                  style={{
                    fontWeight: 800,
                    fontFamily: "arial",
                    color: "rgb(0, 48, 255)",
                  }}
                >
                  21BEEG96
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>
                  Student Name :{" "}
                </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  RITESH TIWARY
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>Course : </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  Bachelor of Technology
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>Branch : </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  Electrical &amp; Electronics Engineering
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              width: "90%",
              border: "1px solid #000",
              borderCollapse: "collapse",
              margin: "0 auto",
            }}
          >
            <tbody>
              <tr
                style={{
                  backgroundColor: "rgb(86, 86, 86)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Slno
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Paper Code
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Paper Name
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Credit
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Grade
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-BS-041
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  MATHEMATICS-III FOR ELECTRICAL SCIENCES
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-ES-013
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BASICS OF MECHANICAL ENGINEERING
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  4
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  B
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTCS-T-ES-005
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  OOP USING JAVA
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  D
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  4
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-T-PC-001
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  CIRCUITS AND SIGNALS
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  4
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  5
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-T-PC-002
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ELETROMAGNETIC THEORY
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  C
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  6
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEI-T-PC-001
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ANALOG ELECTRONIC CIRCUITS
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  7
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTCS-P-ES-006
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  OOP USING JAVA LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-P-PC-001
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  CIRCUITS AND SIGNALS LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  9
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEI-P-PC-002
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ANALOG ELECTRONIC CIRCUITS LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  10
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTII-P-PJ-001
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  SUMMER INTERNSHIP-I
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              backgroundColor: "rgb(104, 218, 255)",
              color: "rgb(5, 26, 255)",
              marginTop: 30,
              width: "40%",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <tbody>
              <tr>
                <th
                  style={{
                    padding: "5px 30px",
                    textAlign: "center",
                    borderRight: "4px dashed rgb(255, 255, 255)",
                  }}
                >
                  SGPA &nbsp;&nbsp;:&nbsp;&nbsp;6.36
                </th>
                <th style={{ padding: "0px 30px" }}>
                  CGPA &nbsp;&nbsp;:&nbsp;&nbsp;6.24
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{
            width: "80%",
            height: 600,
            border: "3px solid rgb(0, 0, 0)",
            margin: "10px auto",
          }}
        >
          <table style={{ width: "100%" }}>
            <tbody>
              <tr style={{ backgroundColor: "rgb(248, 176, 68)" }}>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px 0px",
                    borderBottom: "1px solid rgb(0, 0, 0)",
                  }}
                >
                  SEMESTER - 4
                </th>
              </tr>
            </tbody>
          </table>
          <table style={{ width: "100%", margin: "15px 0px" }}>
            <tbody>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>
                  Student Roll No :{" "}
                </td>
                <td
                  style={{
                    fontWeight: 800,
                    fontFamily: "arial",
                    color: "rgb(0, 48, 255)",
                  }}
                >
                  21BEEG96
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>
                  Student Name :{" "}
                </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  RITESH TIWARY
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>Course : </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  Bachelor of Technology
                </td>
              </tr>
              <tr>
                <td style={{ width: "30%", paddingLeft: 40 }}>Branch : </td>
                <td style={{ fontWeight: 700, fontFamily: "arial" }}>
                  Electrical &amp; Electronics Engineering
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              width: "90%",
              border: "1px solid #000",
              borderCollapse: "collapse",
              margin: "0 auto",
            }}
          >
            <tbody>
              <tr
                style={{
                  backgroundColor: "rgb(86, 86, 86)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Slno
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Paper Code
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Paper Name
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Credit
                </th>
                <th
                  style={{
                    padding: "5px 0px",
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  Grade
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-BS-025
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  MATHEMATICS-IV FOR ELECTRICAL SCIENCES
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  B
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  2
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-HS-022
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  FUNDAMENTALS OF MANAGEMENT
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-T-MC-020
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  UNIVERSAL HUMAN VALUES &amp; PROFESSIONAL ETHICS
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  0
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  4
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTCS-T-OE-036
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  OPERATING SYSTEMS
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  5
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEC-T-PC-010
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  DIGITAL ELECTRONIC CIRCUITS
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  C
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  6
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-T-PC-008
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  MEASUREMENTS &amp; INSTRUMENTATION
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  D
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  7
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-T-PC-010
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ELECTRICAL MACHINES
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  4
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  8
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTBS-P-HS-012
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  CORPORATE COMMUNICATION LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  A
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  9
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEC-P-PC-011
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  DIGITAL ELECTRONIC CIRCUITS LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  10
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-P-PC-007
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  MEASURMENTS &amp; INSTRUMENTATION LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  E
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  11
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  BTEE-P-PC-011
                </td>
                <td
                  style={{
                    textAlign: "left",
                    paddingLeft: "10%",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  ELECTRICAL MACHINES LAB
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  1
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1px solid #000",
                    borderCollapse: "collapse",
                  }}
                >
                  D
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              backgroundColor: "rgb(104, 218, 255)",
              color: "rgb(5, 26, 255)",
              marginTop: 30,
              width: "40%",
              borderRadius: "0px 30px 30px 0px",
            }}
          >
            <tbody>
              <tr>
                <th
                  style={{
                    padding: "5px 30px",
                    textAlign: "center",
                    borderRight: "4px dashed rgb(255, 255, 255)",
                  }}
                >
                  SGPA &nbsp;&nbsp;:&nbsp;&nbsp;6.48
                </th>
                <th style={{ padding: "0px 30px" }}>
                  CGPA &nbsp;&nbsp;:&nbsp;&nbsp;6.29
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Result;
