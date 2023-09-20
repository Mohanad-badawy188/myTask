import { CommitteeMembers, RecommendedList } from "./Data";
import AddBidder from "./Modals/AddBidder";
import AddMember from "./Modals/AddMember";
import EditModal from "./Modals/EditModal";
import NewMessage from "./Modals/NewMessage";
import NewVendor from "./Modals/NewVendor";
import ProgressBar from "./ProgressBar";
import "./SectionTwo.css";
function SectionTwo({
  setFormPage,
}: {
  setFormPage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div
      style={{ padding: "20px", paddingTop: "100px", minHeight: "80vh" }}
      className="bg-white m-1 pb-4 d-block">
      <ProgressBar progress={75} />
      <div className="mt-5 d-flex align-items-start justify-content-between">
        <div>Recommended Bidder List</div>
        <div className="d-flex align-items-center ">
          <button
            className="sectionTwoBtn me-lg-5 "
            data-bs-toggle="modal"
            data-bs-target="#NewVendor">
            Create New
          </button>
          <button
            className="sectionTwoBtn me-lg-5  "
            data-bs-toggle="modal"
            data-bs-target="#addBidder">
            Add
          </button>
          <button className="sectionTwoBtn me-lg-5 ">Remove</button>
          <button className="sectionTwoBtn me-lg-5 ">Import</button>
          <button className="sectionTwoBtn me-lg-5 ">Export</button>
          <NewVendor />
          <AddBidder />
        </div>
      </div>
      <div className="mt-5">
        <table className="table  table-hover text-center">
          <thead className="table-active">
            <tr className="test">
              <th scope="col" className="tableHeader">
                ID
              </th>
              <th scope="col" className="tableHeader">
                Company Name
              </th>
              <th scope="col" className="tableHeader">
                Contact Person
              </th>
              <th scope="col" className="tableHeader">
                Status
              </th>
              <th scope="col" className="tableHeader">
                Reason
              </th>
            </tr>
          </thead>
          <tbody>
            {RecommendedList?.map((item,index) => (
              <tr className="" key={index}>
                <th scope="row">
                  {" "}
                  <div className="d-flex justify-content-between fs14 align-items-center fw-light text-secondary">
                    <input
                      className="form-check-input  test checkbox"
                      type="checkbox"
                      value=""
                    />

                    {item.id}
                  </div>
                </th>
                <th scope="row" className="fw-light fs14 text-secondary">
                  {item.CompanyName}
                </th>
                <th scope="row" className="fw-light fs14 text-secondary">
                  {item.ContactPerson}
                </th>
                <th scope="row" className="fw-light fs14 text-secondary">
                  {item.Status}
                </th>
                <th scope="row" className="fw-light fs14 text-secondary">
                  {item.Reason}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 d-flex align-items-start justify-content-between">
        <div>Committee Members</div>
        <div className="d-flex align-items-center ms-3 ">
          <button
            className="sectionTwoBtn me-lg-5 "
            data-bs-toggle="modal"
            data-bs-target="#AddMember">
            Add Member
          </button>
          <button className="sectionTwoBtn me-lg-5  " data-bs-toggle="modal" data-bs-target="#NewMessage">Create User</button>
          <button className="sectionTwoBtn me-lg-5  "data-bs-toggle="modal" data-bs-target="#EditModal">Edit</button>
          <button className="sectionTwoBtn me-lg-5 ">Remove</button>
          <button className="sectionTwoBtn me-lg-5 ">Import</button>
          <button className="sectionTwoBtn me-lg-5 ">Export</button>
          <AddMember />
          <NewMessage />
          <EditModal />
        </div>
      </div>
      <table className="table  table-hover text-center mt-5">
        <thead className="table-active">
          <tr className="test">
            <th scope="col" className="tableHeader">
              User ID
            </th>
            <th scope="col" className="tableHeader">
              User
            </th>
            <th scope="col" className="tableHeader">
              Title
            </th>
            <th scope="col" className="tableHeader">
              Delegator
            </th>
            <th scope="col" className="tableHeader">
              Committee
            </th>
          </tr>
        </thead>
        <tbody>
          {CommitteeMembers?.map((item,index) => (
            <tr className="" key={index}>
              <th scope="row">
                {" "}
                <div className="d-flex fs14 justify-content-between  align-items-center fw-light text-secondary">
                  <input
                    className="form-check-input test checkbox"
                    type="checkbox"
                    value=""
                  />

                  {item.userId}
                </div>
              </th>
              <th scope="row" className="fw-light fs14 text-secondary">
                {item.User}
              </th>
              <th scope="row" className="fw-light fs14 text-secondary">
                {item.title}
              </th>
              <th scope="row" className="fw-light fs14 text-secondary">
                {item.Delegator}
              </th>
              <th scope="row" className="fw-light fs14 text-secondary">
                {item.Committee}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between mt-5 mb-3">
        <div>
          {" "}
          <button
            onClick={() => setFormPage("SectionOne")}
            type="button"
            className="btn  btn-sm fw-light me-3 "
            style={{
              backgroundColor: "#287EB9",
              color: "white",
              height: "30px",
              width: "120px",
            }}>
            {" "}
            Previous{" "}
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn  btn-sm fw-light me-3 "
            style={{
              backgroundColor: "#287EB9",
              color: "white",
              height: "30px",
              width: "120px",
            }}>
            {" "}
            Save & Close
          </button>
          <button
            onClick={() => setFormPage("SectionThree")}
            className="btn  btn-sm fw-light"
            style={{
              backgroundColor: "#287EB9",
              color: "white",
              height: "30px",
              width: "120px",
            }}>
            {" "}
            Next
          </button>
        </div>
      </div>
      <div className="model" id="model"></div>
    </div>
  );
}

export default SectionTwo;
