import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

function QualificationsBuilder() {
  const { setTextOnScreen } = useContext(ResumeContext);

  function handleChange(e) {
    e.preventDefault();
    setTextOnScreen(e);
  }

  return (
    <form>
      <h2>Qualifications</h2>
      <div>
        <label htmlFor="school">School</label>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          name="school"
          placeholder="School"
        />

        <label htmlFor="Degree">Degree</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          name="degreeSchool"
          placeholder="Degree"
        />

        <label htmlFor="Duration">Duration</label>
        <br />

        <label htmlFor="from">From</label>
        <input
          onChange={handleChange}
          className="form-control"
          type="date"
          name="fromSchool"
        />

        <label htmlFor="to">To</label>
        <input
          onChange={handleChange}
          className="form-control"
          type="date"
          name="toSchool"
        />
      </div>
      <div>
        <label htmlFor="College">College</label>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          name="college"
          placeholder="College"
        />

        <label htmlFor="Degree">Degree</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          name="degreeCollege"
          placeholder="Degree"
        />

        <label htmlFor="Duration">Duration</label>
        <br />

        <label htmlFor="from">From</label>
        <input
          onChange={handleChange}
          className="form-control"
          type="date"
          name="fromCollege"
        />

        <label htmlFor="to">To</label>
        <input
          onChange={handleChange}
          className="form-control"
          type="date"
          name="toCollege"
        />
      </div>
    </form>
  );
}

export default QualificationsBuilder;
