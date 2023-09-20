function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="position-relative   w-50 m-auto mt-4 ">
      <div
        className="progress"
        role="progressbar"
        aria-label="Progress"
        style={{ height: "2px" }}>
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, backgroundColor: "#287eb9" }}></div>
      </div>
      <div
        className="position-absolute bottom-100 mb-3 start-50 translate-middle fs14  "
        style={{ color: "#A9A9A9" }}>
        Stakeholders
        <div className=" text-center mt-2" style={{ fontSize: "12px" }}>
          Second Step
        </div>
      </div>
      <div
        className="position-absolute bottom-100 mb-3 start-0 translate-middle fs14  "
        style={{ color: "#A9A9A9" }}>
        Overview
        <div className=" text-center mt-2" style={{ fontSize: "12px" }}>
          FIrst Step
        </div>
      </div>
      <div
        className="position-absolute bottom-100 mb-3 start-100 translate-middle fs14 w-50 text-center  "
        style={{ color: "#A9A9A9" }}>
        Event Details
        <div className=" text-center mt-2" style={{ fontSize: "12px" }}>
          Third Step
        </div>
      </div>
      <div
        className="position-absolute top-0 start-0 translate-middle   rounded-pill"
        style={{
          width: "1.4rem",
          height: "1.4rem",
          backgroundColor: ` ${progress >= 0 ? "#287eb9 " : "#DDDDDD"}`,
        }}></div>
      <div
        className="position-absolute top-0 start-50 translate-middle rounded-pill"
        style={{
          width: "1.4rem",
          height: "1.4rem",
          backgroundColor: ` ${progress >= 50 ? "#287eb9 " : "#DDDDDD"}`,
        }}></div>
      <div
        className="position-absolute top-0 start-100 translate-middle rounded-pill"
        style={{
          width: "1.4rem",
          height: "1.4rem",
          backgroundColor: ` ${progress >= 100 ? "#287eb9 " : "#DDDDDD"}`,
        }}></div>
    </div>
  );
}

export default ProgressBar;
