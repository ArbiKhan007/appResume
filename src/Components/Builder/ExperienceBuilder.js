import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

function ExperienceBuilder() {
  const { setTextOnScreen } = useContext(ResumeContext);

  function handleChange(e) {
    setTextOnScreen(e);
  }

  return (
    <div>
      <form action="#" method="post">
        <h2>Experience</h2>
        <h4>Current Job</h4>
        <div>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            name="firstJob"
            placeholder="Current Post"
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="date"
            name="startDate"
            id=""
          />
          <textarea
            onChange={handleChange}
            className="form-control"
            type="text"
            name="descriptionOne"
            id=""
            placeholder="Describe your role"
          />
          <textarea
            onChange={handleChange}
            className="form-control"
            type="text"
            name="descriptionTwo"
            id=""
            placeholder="Describe your role"
          />
          <textarea
            onChange={handleChange}
            className="form-control"
            type="text"
            name="descriptionThree"
            id=""
            placeholder="Describe your role"
          />
        </div>
        <br />
        <h4>Previous Job</h4>
        <div>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            name="prevJob"
            placeholder="Previous Post"
          />
          <label htmlFor="startDateTwo">Start Date</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="date"
            name="startDateTwo"
            id=""
          />
          <label htmlFor="endDate">End Date</label>
          <input
            onChange={handleChange}
            className="form-control"
            type="date"
            name="endDate"
            id=""
          />
          <textarea
            onChange={handleChange}
            className="form-control"
            type="text"
            name="descriptionFour"
            id=""
            placeholder="Describe your role"
          />
          <textarea
            onChange={handleChange}
            className="form-control"
            type="text"
            name="descriptionFive"
            id=""
            placeholder="Describe your role"
          />
          <textarea
            onChange={handleChange}
            className="form-control"
            type="text"
            name="descriptionSix"
            id=""
            placeholder="Describe your role"
          />
        </div>
      </form>
    </div>
  );
}

export default ExperienceBuilder;
