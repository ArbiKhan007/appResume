import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

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
      <div>
        <div className="resume__header__personal">
          <h1>
            <span className="first-name">{text.fName}</span> {text.lname}
          </h1>

          <div className="resume__header__designation">
            <p className="lead">{text.desig}</p>
          </div>
        </div>

        <div className="resume__header__address">
          <h5>Address</h5>
          <p>
            {text.addlineone}
            <br /> {text.addlinetwo} <br />
            {text.city}
            <br /> {text.state}, {text.country}
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="resume__header__email">
            <div className="float-left">
              <h6>Email </h6>
            </div>
            <p className="float-right">{text.email}</p>
          </div>

          <div className="resume__header__email">
            <div className="float-left">
              <h6>Phone </h6>
            </div>
            <p className="float-right">{text.phone}</p>
          </div>
        </div>

        <div>
          <div className="resume__header__email">
            <div className="float-left">
              <h6>LinkedIn </h6>
            </div>
            <p className="float-right">{text.linkedin}</p>
          </div>

          <div className="resume__header__email">
            <div className="float-left">
              <h6>Twitter </h6>
            </div>
            <p className="float-right">{text.twitter}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
