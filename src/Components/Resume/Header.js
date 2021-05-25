import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";
import Contact from "./Contact";

function Header() {
  const darkStyle = {
    backgroundColor: "rgb(90,89,89)",
  };

  let lightStyle = {
    backgroundColor: "rgb(120, 100, 255)",
  };

  const { text, isDark } = useContext(ResumeContext);

  return (
    <div className="resume__header" style={isDark ? darkStyle : lightStyle}>
      <div style={{ maxWidth: "50%" }}>
        <div className="resume__header__personal">
          <h1>
            <span className="first-name">{text.fName}</span> {text.lname}
          </h1>

          <div className="resume__header__designation">
            <p className="lead">{text.desig}</p>
          </div>
        </div>

        <div className="resume__header__address">
          <h3>Address</h3>
          <h5>
            {text.addlineone}
            <br /> {text.addlinetwo} <br />
            {text.city}
            <br /> {text.state}, {text.country}
          </h5>
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default Header;
