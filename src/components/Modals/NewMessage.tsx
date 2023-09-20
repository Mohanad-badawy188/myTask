function AddMember() {
    return (
      <div
        className="modal fade mt-5"
        id="NewMessage"
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
            {/* {////////////////Body //////////////} */}
            <div className="modal-body">
            
              <div className="mb-4">
                <label className="fs14 text-secondary"> Name* </label>
                <input
                  name="RequestTitle"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}/>
              </div>
  
              <div className="mb-4">
                <label className="fs14 text-secondary"> Email* </label>
                <textarea
                  name="RequestTitle"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}></textarea>
              </div>
  
              <div className="mb-4">
                <label className="fs14 text-secondary"> Title* </label>
                <textarea
                  name="RequestTitle"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}></textarea>
              </div>
  
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
  
  export default AddMember;
  