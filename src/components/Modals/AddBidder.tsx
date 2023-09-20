import { FiSearch } from "react-icons/fi";
import { Bidders } from "../Data";

function AddBidder() {
  return (
    <div
      className="modal fade mt-5"
      style={{minHeight:"1500px"}}
      id="addBidder"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs14 fw-normal " id="exampleModalLabel">
              Add Bidder{" "}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          {/* {//////////////BODY /////////////} */}
          <div className="modal-body">
          <div className="input-group d-none d-md-flex mb-5" >
              <button
                style={{ backgroundColor: "white" }}
                className="input-group-text  border justify-content-center ">
                <FiSearch style={{ opacity: "0.6", fontSize: "18px" }} />{" "}
              </button>
              <input
                style={{ backgroundColor: "#F3F6FB" }}
                placeholder="Search projects"
                className="py-2 px-3 form-control  border shadow-none 

              "
              />
            </div>
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
                    E-mail
                  </th>
               
                </tr>
              </thead>
              <tbody>
                {Bidders?.map((item,index) => (
                  <tr className="" key={index}>
                    <th scope="row">
                      {" "}
                      <div className="d-flex justify-content-between fs14 align-items-center fw-light text-secondary">
                        <input
                          className="form-check-input me-3 test "
                          type="checkbox"
                          value=""
                        />

                        {item.id}
                      </div>
                    </th>
                    <th scope="row" className="fw-light fs14 text-secondary">
                      {item.companyName}
                    </th>
                    <th scope="row" className="fw-light fs14 text-secondary">
                      {item.ContactPerson}
                    </th>
                    <th scope="row" className="fw-light fs14 text-secondary">
                      {item.Email}
                    </th>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-sm fs14 fw-light"
              style={{
                backgroundColor: "#495056",
                color: "white",
                height: "30px",
                width: "120px",
              }}
              data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-sm fs14 fw-light"
              style={{
                backgroundColor: "#287EB9",
                color: "white",
                height: "30px",
                width: "120px",
              }}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBidder;
