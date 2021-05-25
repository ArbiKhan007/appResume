import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

function Skills() {
  const { text } = useContext(ResumeContext);

  return (
    <div className="resume__experience">
      <h3 className="heading-3">Skills</h3>
      <ul>
        <li>{text.skillOne}</li>
        <li>{text.skillTwo}</li>
        <li>{text.skillThree}</li>
        <li>{text.skillFour}</li>
      </ul>
    </div>
  );
}

export default Skills;
