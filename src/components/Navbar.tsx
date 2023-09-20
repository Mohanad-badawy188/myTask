import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { VscListSelection } from "react-icons/vsc";
import { PiChatCircleBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";


import { AiOutlineUser } from "react-icons/ai";
import avatar from "../assets/avatars/avatar.jpg";
import { Notifications, messages } from "./Data";
import { MdOutlineNotificationsNone } from "react-icons/md";
function Navbar() {
  return (
    <div>
      <nav className="navbar  shadow-sm flex-nowrap w-100  ">
        <div className="container-fluid">
          <div className="d-flex align-middle ">
            <button
              className="border-0 bg-white "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav"
              aria-expanded="false"
              aria-controls="nav">
              <span className="navbar-toggler-icon ">
                <VscListSelection
                  style={{ fontSize: "2.2rem", outline: "none" }}
                />
              </span>
            </button>

            <div
              //   style={{ color: "#495057" }}
              className=" fs-3 fw-medium navbar-text ms-4 
          ">
              Welcome, Mohamed
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <div className="input-group d-none d-md-flex">
              <input
                style={{ backgroundColor: "#F3F6FB" }}
                placeholder="Search projects"
                className="py-2 px-3 form-control  border-0 shadow-none 

              "
              />
              <button
                style={{ backgroundColor: "#F3F6FB" }}
                className="input-group-text  border-0 justify-content-center w-25">
                <FiSearch style={{ opacity: "0.6", fontSize: "18px" }} />{" "}
              </button>
            </div>
            {/* { ///////////////////////         CHAT          //////////////////} */}
            <div
              className="position-relative mx-3 cursor-pointer dropdown  "
              data-bs-toggle="dropdown">
              <PiChatCircleBold className=" fs-5 text-body-secondary hover dropdown-toggle  " />
              <span
                className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill "
                style={{ backgroundColor: "#287EB9" }}>
                4 <span className="visually-hidden">unread messages</span>
              </span>
              <ul
                className="dropdown-menu dropdown-menu-end text-start "
                style={{
                  width: "330px",
                  marginTop: "15px",
                  marginLeft: "50px",
                }}>
                <li className="dropdown-header border-bottom text-center">
                  4 New Messages
                </li>
                {messages?.map((message, index) => (
                  <li
                    className=" d-flex container-fluid align-items-center border-bottom dropdownitem"
                    key={index}>
                    <img
                      className="rounded-circle"
                      style={{ height: "50px" }}
                      src={message.senderImg}
                    />{" "}
                    <div className="mx-3 my-2">
                      <div className="mb-2" style={{ fontSize: "15px" }}>
                        {message.senderName}
                      </div>
                      <div style={{ fontSize: "12px", opacity: "0.4" }}>
                        {message.content}
                      </div>
                      <div
                        style={{ fontSize: "12px" }}
                        className="text-secondary mt-2 ">
                        {message.date}{" "}
                      </div>
                    </div>
                  </li>
                ))}
                <li
                  className="text-secondary text-center border-top pt-2"
                  style={{ fontSize: "12px" }}>
                  Show all messages
                </li>
              </ul>
            </div>
            {/* { ///////////////////////         Notification      //////////////////} */}
            <div>
              <div
                className="position-relative mx-2 cursor-pointer dropdown "
                data-bs-toggle="dropdown">
                <MdOutlineNotificationsNone className="fs-2 text-body-secondary  hover dropdown-toggle" />
                <span
                  className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill d-none"
                  style={{ backgroundColor: "#287EB9" }}>
                  4 <span className="visually-hidden">unread Notification</span>
                </span>
                <ul
                  className="dropdown-menu dropdown-menu-end text-start fade"
                  style={{
                    width: "330px",
                    marginTop: "15px",
                    marginLeft: "50px",
                  }}>
                  <li className="dropdown-header border-bottom text-center">
                    4 New Notification
                  </li>
                  {Notifications?.map((notification, index) => (
                    <li
                      className=" d-flex container-fluid align-items-center border-bottom dropdownitem"
                      key={index}>
                      <img
                        className="rounded-circle"
                        style={{ height: "20px" }}
                        src={notification.img}
                      />{" "}
                      <div className="mx-3 my-2">
                        <div className="mb-2" style={{ fontSize: "15px" }}>
                          {notification.title}
                        </div>
                        <div style={{ fontSize: "12px", opacity: "0.4" }}>
                          {notification.content}
                        </div>
                        <div
                          style={{ fontSize: "12px" }}
                          className="text-secondary mt-2 ">
                          {notification.date}{" "}
                        </div>
                      </div>
                    </li>
                  ))}
                  <li
                    className="text-secondary text-center border-top pt-2"
                    style={{ fontSize: "12px" }}>
                    Show all Notification
                  </li>
                </ul>
              </div>
            </div>
            {/* { ///////////// PROFILE //////////////////} */}
            <div>
              <div
                className="mx-2 d-flex align-items-center cursor-pointer  dropdown"
                data-bs-toggle="dropdown">
                <img
                  style={{ height: "40px" }}
                  src={avatar}
                  className="rounded-circle"
                />
                <div className="mx-1">Mohamed</div>
                <RiArrowDropDownLine />
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item px-4 d-flex align-items-center fw-light mb-1"
                      style={{ fontSize: "14px" }}
                      href="#">
                      <AiOutlineUser className="me-2  fs14 " />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item px-4 d-flex align-items-center fw-light "
                      style={{ fontSize: "14px" }}
                      href="#">
                      <GrAnalytics className="me-2 text-secondary fs14" />
                      Analytics{" "}
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-item  fs14 px-4 fw-light">
                    Setting & privacy
                  </li>
                  <li className="dropdown-item  fs14 px-4 fw-light">Help</li>
                  <li className="dropdown-item  fs14 px-4 fw-light">
                    Sign out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
      </nav>
    </div>
  );
}

export default Navbar;
