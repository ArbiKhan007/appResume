import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

function Experience() {
  const { text } = useContext(ResumeContext);

  return (
    <div className="resume__experience">
      <h3 className="heading-3">Experience/Employment History</h3>

      <div className="resume__experience--left">
        <h4 className="resume__experience__jobtitle heading-4">
          {text.firstJob}
        </h4>
        <h6 className="heading-6">{text.startDate} to Present</h6>
        <ul>
          <li>
            <p className="lead">{text.descriptionOne}</p>
          </li>
          <li>
            <p className="lead">{text.descriptionTwo}</p>
          </li>
          <li>
            <p className="lead">{text.descriptionThree}</p>
          </li>
        </ul>
      </div>

      <div className="resume__experience--right">
        <h4 className="resume__experience__jobtitle heading-4">
          {text.prevJob}
        </h4>
        <h6 className="heading-6">
          {text.startDateTwo} to {text.endDate}
        </h6>
        <ul>
          <li>
            <p className="lead">{text.descriptionFour}</p>
          </li>
          <li>
            <p className="lead">{text.descriptionFive}</p>
          </li>
          <li>
            <p className="lead">{text.descriptionSix}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
