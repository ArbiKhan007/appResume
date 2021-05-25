import React, { useContext } from "react";
import html2canvas from "html2canvas";
import ResumeContext from "../../ResumeContext";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PrintComp() {
  const style = {
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "#000",
    fontSize: "25px",
  };

  const { setIsOutputted } = useContext(ResumeContext);

  function handleClick() {
    // Define the function
    // to screenshot the div
    let div = document.getElementById("resume");

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div, {
      scale: 4,
      dpi: 144,
    }).then(function (canvas) {
      let firstChild = document.getElementById("output").firstChild;

      if (firstChild) {
        document.getElementById("output").replaceChild(canvas, firstChild);
      } else {
        document.getElementById("output").appendChild(canvas);
      }
    });

    //set output state to true/false i.e. toggle state
    setIsOutputted((prev) => !prev);
  }
  return (
    <div>
      <div onClick={handleClick}>
        <FontAwesomeIcon style={style} icon={faDownload} title="Download" />
      </div>
    </div>
  );
}

export default PrintComp;
