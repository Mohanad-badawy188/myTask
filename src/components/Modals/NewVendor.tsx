import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  Type: string;
};

function NewVendor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data) ;

  return (
    <div
      className="modal fade mt-2"
      id="NewVendor"
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
          {/* {//////////// MODAL BODY /////////////} */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              <div className="mb-2 mt-2">
                <label className="fs14 text-secondary">Type</label>
                <select
                  defaultValue={"Default"}
                  {...register("Type", { required: true })}
                  className="form-select shadow-none border-0 text-secondary fw-light fs14 mb-2"
                  style={{ backgroundColor: "#F1F1F1" }}>
                  <option value="Default" disabled>
                    PLease Select Type
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                {errors.Type && <span>This field is required</span>}
              </div>
              <div className="mb-2">
                <label className="fs14 text-secondary">Company Name*</label>
                <input
                  name="RequestTitle"
                  placeholder="Please Enter Company Name"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}
                />
              </div>
              <div className="mb-2">
                <label className="fs14 text-secondary">Contact Name*</label>
                <input
                  name="RequestTitle"
                  placeholder="Please Enter Contact Name"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}
                />
              </div>
              <div className="mb-2">
                <label className="fs14 text-secondary">E-mail*</label>
                <input
                  name="RequestTitle"
                  placeholder="Please Enter E-mail"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}
                />
              </div>
              <div className="mb-2">
                <label className="fs14 text-secondary">Contact Phone*</label>
                <input
                  name="RequestTitle"
                  placeholder="Please Enter Contact Phone"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="fs14 text-secondary">
                  Commodity Supplied
                </label>
                <select
                  defaultValue={"Default"}
                  className="form-select shadow-none border-0 text-secondary fw-light fs14 mb-2"
                  style={{ backgroundColor: "#F1F1F1" }}>
                  <option value="Default" disabled>
                    PLease Select Type
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="fs14 text-secondary">Trade License</label>
                <input
                  name="RequestTitle"
                  placeholder="Please Enter Trade License"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}
                />
              </div>{" "}
              <div className="mb-2">
                <label className="fs14 text-secondary">
                  Trade License Expiry Date
                </label>
                <input
                  name="RequestTitle"
                  placeholder="DD/MM/YYYY"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}
                />
              </div>{" "}
              <div className="mb-2">
                <label className="fs14 text-secondary">Commercial ID</label>
                <input
                  name="RequestTitle"
                  placeholder="Please Enter Commercial ID"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}
                />
              </div>{" "}
              <div className="mb-2">
                <label className="fs14 text-secondary">
                  Commercial ID Expiry Date
                </label>
                <input
                  name="RequestTitle"
                  placeholder="DD/MM/YYYY"
                  className="form-control shadow-none border "
                  style={{ backgroundColor: "#F1F1F1" }}
                />
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
                type="submit"
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewVendor;
