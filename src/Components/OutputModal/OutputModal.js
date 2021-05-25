import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OutputModal() {
  function handleClick() {
    setIsOutputted((prev) => !prev);
  }

  const { setIsOutputted, isOutputted } = useContext(ResumeContext);

  const style = {
    fontSize: "20px",
    color: "#fff",
    padding: "1rem",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    margin: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: isOutputted ? "block" : "none",
    overflowY: "scroll",
    transform: "scale(1)",
    transitionDelay: "1.5s",
    transitionTimingFunction: "ease-in",
  };

  const outputResumeStyle = {
    position: "absolute",
    top: "100px",
    left: "300px",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
  };
  return (
    <div style={style} className="output-modal">
      <div>Here's Your Resume Just Right Click and Download</div>
      <div onClick={handleClick}>
        <FontAwesomeIcon style={closeBtnStyle} icon={faTimesCircle} />
      </div>
      <div style={outputResumeStyle} id="output"></div>
    </div>
  );
}

export default OutputModal;
