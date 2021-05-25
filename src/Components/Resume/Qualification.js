import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

function Qualification() {
  const { text } = useContext(ResumeContext);

  return (
    <div className="resume__experience">
      <h3 className="heading-3">Qualifications</h3>
      <div>
        <h4 className="heading-4">{text.school}</h4>
        <h4 className="resume__experience__jobtitle heading-4">
          {text.degreeSchool}
        </h4>
        <small>
          {text.fromSchool} to {text.toSchool}
        </small>

        <h4 className="heading-4">{text.college}</h4>
        <h4 className="resume__experience__jobtitle heading-4">
          {text.degreeCollege}
        </h4>

        <small>
          {text.fromCollege} to {text.toCollege}
        </small>
      </div>
    </div>
  );
}

export default Qualification;
