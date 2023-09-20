
function EditModal() {
  return (
    <div
      className="modal fade mt-5"
      id="EditModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs14 fw-normal " id="exampleModalLabel">
              Create New Vendor
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table className="table  table-hover text-center  mt-5">
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
                {Array.from(Array(6).keys()).map((_,index) => (
                  <tr className=""key={index}>
                    <th scope="row">
                      {" "}
                        <input
                          className="form-control mb-2 mt-2 "
                          style={{ backgroundColor: "#F1F1F1" }}
                        />
                    </th>
                    <th scope="row" className="fw-light fs14 text-secondary">
                      <div className="mb-2 mt-2">
                      <select
                defaultValue={"Default"}                          className="form-select shadow-none border-0 text-secondary fw-light fs14 mb-2"
                          style={{ backgroundColor: "#F1F1F1" }}>
                  <option value ="Default"  disabled >
                            Lobna
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>{" "}
                    </th>
                    <th scope="row" className="fw-light fs14 text-secondary">
                      <div className="mb-2 mt-2">
                      <select
                defaultValue={"Default"}                          className="form-select shadow-none border-0 text-secondary fw-light fs14 mb-2"
                          style={{ backgroundColor: "#F1F1F1" }}>
                  <option value ="Default"  disabled >
                            Member For Purchasing
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>{" "}
                    </th>
                    <th scope="row" className="fw-light fs14 text-secondary">
                      <div className="mb-2 mt-2">
                      <select
                defaultValue={"Default"}                          className="form-select shadow-none border-0 text-secondary fw-light fs14 mb-2"
                          style={{ backgroundColor: "#F1F1F1" }}>
                  <option value ="Default"  disabled >
                            Ashraf{" "}
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>{" "}
                    </th>
                    <th scope="row" className="fw-light fs14 text-secondary">
                      <div className="mb-2 mt-2">
                      <select
                defaultValue={"Default"}                          className="form-select shadow-none border-0 text-secondary fw-light fs14 mb-2"
                          style={{ backgroundColor: "#F1F1F1" }}>
                  <option value ="Default"  disabled >
                            Opening Technical Envelop
                          </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>{" "}
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
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
