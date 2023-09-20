import "./Header.css";

import SectionOne from "./SectionOne";
import Navbar from "./Navbar";
import LeftNavBar from "./LeftNavBar";
import { useState } from "react";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

function Form() {
  const [formPage, setFormPage] = useState("SectionOne");
  const [pageOneData, setPageOneData] = useState({});
  console.log(pageOneData);
  return (
    <div className="overflow-hidden">
      <div className="d-flex align-items-start justify-content-start ">
        <LeftNavBar />
        <div className="w-100">
          <Navbar />
          <div
            style={{
              minHeight: "80vh",
              backgroundColor: "#F3F6FB",
              padding: "10px",
              paddingBottom: "60px",
            }}>
            <div
              className="container-fluid  "
              style={{
                height: "100%",
              }}>
              <div
                className="fs-5 fw-medium pt-4 ms-4 "
                style={{ color: "#495057" }}>
                Create Source Request
              </div>
              {formPage === "SectionOne" && (
                <SectionOne
                  setFormPage={setFormPage}
                  setPageOneData={setPageOneData}
                />
              )}
              {formPage === "SectionTwo" && (
                <SectionTwo setFormPage={setFormPage} />
              )}
              {formPage === "SectionThree" && <SectionThree />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
