import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

function SkillsBuilder() {
  const { setTextOnScreen } = useContext(ResumeContext);

  function handleChange(e) {
    e.preventDefault();
    setTextOnScreen(e);
  }

  return (
    <>
      <form>
        <h2>Skills</h2>

        <textarea
          onChange={handleChange}
          className="form-control"
          type="text"
          name="skillOne"
          id="skillOne"
          placeholder="Skill"
        />
        <textarea
          onChange={handleChange}
          className="form-control"
          type="text"
          name="skillTwo"
          id="skillTwo"
          placeholder="Skill"
        />
        <textarea
          onChange={handleChange}
          className="form-control"
          type="text"
          name="skillThree"
          id="skillThree"
          placeholder="Skill"
        />
        <textarea
          onChange={handleChange}
          className="form-control"
          type="text"
          name="skillFour"
          id="skillFour"
          placeholder="Skill"
        />
      </form>
    </>
  );
}

export default SkillsBuilder;
