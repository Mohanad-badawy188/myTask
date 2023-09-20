import ProgressBar from "./ProgressBar"

function SectionThree() {
  return (
    <div
    style={{ padding: "20px", paddingTop: "100px", minHeight: "20vh" }}
    className="bg-white m-1 pb-4 d-block">
    <ProgressBar progress={100} />
    </div>
  )
}

export default SectionThree
