import "./Header.css";
import { CiSettings } from "react-icons/ci";
import { BsPencilSquare } from "react-icons/bs";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoMdAnalytics } from "react-icons/io";
import { BsFileEarmarkPlus } from "react-icons/bs";

import { TbReport } from "react-icons/tb";
import { BiBookOpen } from "react-icons/bi";
import { LuPlusSquare } from "react-icons/lu";

import {  AiOutlineFolderAdd } from "react-icons/ai";
import avatar from "../assets/avatars/avatar.jpg";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

function LeftNavBar() {
    const [currentPage, setCurrentPage] = useState("Create/Source Request");
    const [createarrow, setCreateArrow] = useState(false);
    const [manageArrow, setManageArrow] = useState(false);
    console.log(currentPage.split("/"));
    const handleCLickCreate = () => {
      if (currentPage.includes("Create")) return;
      setCurrentPage("Create");
      setCreateArrow((current) => !current);
    };
    const handleCLickManage = () => {
      if (currentPage.includes("Manage")) return;
  
      setCurrentPage("Manage");
      setManageArrow((current) => !current);
    };
  return (
    <div className="collapse collapse-horizontal  " id="nav">
        <div
          className="border-end  "
          style={{ minHeight: "100vh", width: "250px" }}>
          {" "}
          <div className="container mt-4 text-center ">
            <img
              style={{ width: "50px" }}
              className="rounded-circle mb-5"
              src={avatar}
            />
            <div
              className={`${
                currentPage.split("/").includes("Create") ? "focus" : ""
              } d-flex align-items-center justify-content-between hover cursor-pointer mb-4 mx-3 `}
              data-bs-toggle="collapse"
              data-bs-target="#create"
              role="button"
              aria-controls="create"
              aria-expanded="false"
              onClick={handleCLickCreate}>
              <div className="d-flex align-items-center fs14">
                <AiOutlineFolderAdd className="me-3 fs-5" />
                Create
              </div>
              <RiArrowDropDownLine
                className={`${createarrow ? "arrowUp" : ""}`}
              />
            </div>
            <div id="create" className="mb-4 collapse">
              <div
                className={` ${
                  currentPage.split("/").includes("Source Request")
                    ? "focus"
                    : ""
                }
  fs14 text-secondary mb-3 hover cursor-pointer  mx-4 ms-5 text-start`}
                onClick={() => setCurrentPage("Create/Source Request")}>
                <LiaFileInvoiceSolid className="me-2 fs-5" />
                Source Request
              </div>
              <div
                className={` ${
                  currentPage.split("/").includes("Sourcing Project")
                    ? "focus"
                    : ""
                }
            fs14 text-secondary mb-3 hover cursor-pointer mx-4 ms-5 text-start`}
                onClick={() => setCurrentPage("Create/Sourcing Project")}>
                <IoMdAnalytics className="me-2 fs-5" />
                Sourcing Project
              </div>
              <div
                className={` ${
                  currentPage.split("/").includes("RFX Project") ? "focus" : ""
                }
  fs14 text-secondary mb-3 hover cursor-pointer mx-4 ms-5 text-start`}
                onClick={() => setCurrentPage("Create/RFX Project")}>
                <BsFileEarmarkPlus className="me-2 fs-5" />
                RFX Project
              </div>
            </div>{" "}
            <div
              className={`${
                currentPage.split("/").includes("Manage") ? "focus" : ""
              } d-flex align-items-center justify-content-between hover cursor-pointer mb-4 mx-3 `}
              data-bs-toggle="collapse"
              data-bs-target="#manage"
              role="button"
              aria-controls="manage"
              onClick={handleCLickManage}>
              <div className="d-flex align-items-center fs14">
                <BsPencilSquare className="me-3 fs-5  " />
                Manage
              </div>
              <RiArrowDropDownLine
                className={`${manageArrow ? "arrowUp" : ""}`}
              />
            </div>
            <div id="manage" className="mb-4 collapse">
              <div
                className={` ${
                  currentPage.split("/").includes("Reports") ? "focus" : ""
                }
  fs14 text-secondary mb-3 hover cursor-pointer text-start mx-5`}
                onClick={() => setCurrentPage("Manage/Reports")}>
                <TbReport className="me-2 fs-5" />
                Reports
              </div>
              <div
                className={` ${
                  currentPage.split("/").includes("Library") ? "focus" : ""
                }
  fs14 text-secondary mb-3 hover cursor-pointer text-start mx-5`}
                onClick={() => setCurrentPage("Manage/Library")}>
                <BiBookOpen className="me-2 fs-5" />
                Library
              </div>
              <div
                className={` ${
                  currentPage.split("/").includes("To Do") ? "focus" : ""
                }
  fs14 text-secondary mb-3 hover cursor-pointer mx-5 text-start`}
                onClick={() => setCurrentPage("Manage/To Do")}>
                <LuPlusSquare className="me-2 fs-5" />
                To Do
              </div>
            </div>
            <div
              className={` ${
                currentPage.split("/").includes("Administration") ? "focus" : ""
              } d-flex align-items-center justify-content-between hover cursor-pointer mb-4 mx-3  `}
              onClick={() => setCurrentPage("Administration")}>
              <div className="d-flex align-items-center fs14">
                <CiSettings className="me-3 fs-5" />
                Administration
              </div>
            </div>
          </div>
        </div>
        
      </div>      
  )
}

export default LeftNavBar
