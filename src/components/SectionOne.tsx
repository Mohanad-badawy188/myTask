import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ProgressBar from "./ProgressBar";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  RequestTitle: string;
};

function SectionOne({
  setFormPage,
  setPageOneData,
}: {
  setFormPage: React.Dispatch<React.SetStateAction<string>>;
  setPageOneData: React.Dispatch<React.SetStateAction<Inputs>>;
}) {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],

      [{ align: ["right", "center", "justify"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "indent",

    "align",
    "size",
    "font",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setPageOneData(data);
    setFormPage("SectionTwo");
  };

  return (
    <div
      style={{ padding: "20px", paddingTop: "100px" }}
      className="bg-white m-1 pb-4 d-block">
      <ProgressBar progress={25} />
      {/* { ////////////// form /////////////} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5 fs14 fw-medium text-secondary">Header Details</div>
        <div className="d-lg-flex  align-items-start justify-content-center">
          <div>
            <div className="mb-4">
              <label className="fs14 text-secondary">Request Title*</label>
              <input
                {...register("RequestTitle", { required: true })}
                className="form-control shadow-none border "
                style={{ backgroundColor: "#F1F1F1" }}
              />
              {errors.RequestTitle && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <label className="fs14  text-secondary">Description</label>
            <div
              className="p-1 "
              style={{
                backgroundColor: "white",
              }}>
              <div
                className="bg-white"
                style={{
                  backgroundColor: "white",
                }}>
                <ReactQuill
                  placeholder="type something"
                  theme="snow"
                  modules={modules}
                  formats={formats}
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="fs14 text-secondary">Requester</label>
                <input
                  readOnly
                  value={"Waleed Mohamed"}
                  className="form-control shadow-none border text-secondary fw-light fs14"
                  style={{ backgroundColor: "#F1F1F1" }}
                />
              </div>
              <div className="mb-2 mt-2">
                <label className="fs14 text-secondary">Document Type</label>
                <select
                  defaultValue={"Default"}
                  className="form-select shadow-none border-0 text-secondary fw-light fs14 "
                  style={{ backgroundColor: "#F1F1F1" }}>
                  <option value="Default" disabled>
                    PLease Select Company Code
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <label className="fs14 text-secondary">Sourcing Strategy</label>
            <input
              type="email"
              className="form-control shadow-none border "
              style={{ backgroundColor: "#F1F1F1" }}
            />
          </div>
          <div className="resopnsive-width  ">
            <div className="mb-2 mt-2 ">
              <label className="fs14 text-secondary">Source Agent*</label>
              <select
                defaultValue={"Default"}
                className="form-select shadow-none border-0 text-secondary fw-light fs14 "
                style={{ backgroundColor: "#F1F1F1" }}>
                <option value="Default" disabled>
                  PLease Select Source Agent
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-2 mt-2">
              <label className="fs14 text-secondary">Currency*</label>
              <select
                defaultValue={"Default"}
                className="form-select shadow-none border-0 text-secondary fw-light fs14 "
                style={{ backgroundColor: "#F1F1F1" }}>
                <option value="Default" disabled>
                  PLease Select Currency
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-2 mt-2">
              <label className="fs14 text-secondary">Department</label>
              <select
                defaultValue={"Default"}
                className="form-select  shadow-none border-0 text-secondary fw-light fs14 "
                style={{ backgroundColor: "#F1F1F1" }}>
                <option value="Default" disabled>
                  PLease Select Department
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-2 mt-2">
              <label className="fs14 text-secondary">Orgin</label>
              <input
                readOnly
                value={"External"}
                className="form-control shadow-none border text-secondary fw-light fs14"
                style={{ backgroundColor: "#F1F1F1" }}
              />
            </div>

            <div className="mb-2 mt-2 pb-2">
              <label className="fs14 text-secondary">Department</label>
              <select
                defaultValue={"Default"}
                className="form-select shadow-none border-0 text-secondary fw-light fs14 "
                style={{ backgroundColor: "#F1F1F1" }}>
                <option value="Default" disabled>
                  PLease Select Department
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <div className="my-5 fs14 fw-medium text-secondary">ERP Details</div>
          <div className="d-flex flex-wrap">
            <div className="mb-2 mt-2 pb-2  erp" style={{ width: "45%" }}>
              <label className="fs14 text-secondary">Company Code</label>
              <select
                defaultValue={"Default"}
                className="form-select shadow-none border-0 text-secondary fw-light fs14 "
                style={{ backgroundColor: "#F1F1F1" }}>
                <option value="Default" disabled>
                  PLease Select Company Code
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-2 mt-2 pb-2 ms-5 erp" style={{ width: "45%" }}>
              <label className="fs14 text-secondary">Purchasing Group</label>
              <select
                defaultValue={"Default"}
                className="form-select shadow-none border-0 text-secondary fw-light fs14 "
                style={{ backgroundColor: "#F1F1F1" }}>
                <option value="Default" disabled>
                  PLease Select Purchasing Group
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-2 mt-2 pb-2 erp" style={{ width: "45%" }}>
              <label className="fs14 text-secondary">
                Purchasing Organization
              </label>
              <select
                defaultValue={"Default"}
                className="form-select shadow-none border-0 text-secondary fw-light fs14 "
                style={{ backgroundColor: "#F1F1F1" }}>
                <option value="Default" disabled>
                  PLease Select Purchasing Organization
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        {/* { close buttons } */}
        <div className="d-flex justify-content-end">
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
            type="submit"
            // onClick={() => setFormPage("SectionTwo")}
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
      </form>
    </div>
  );
}

export default SectionOne;
