import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

function HeaderBuilder() {
  const { setTextOnScreen } = useContext(ResumeContext);

  function handleChange(e) {
    e.preventDefault();
    setTextOnScreen(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <h2>Header</h2>
        <input
          type="text"
          onChange={handleChange}
          name="fName"
          className="form-control"
          placeholder="First Name"
        />

        <input
          type="text"
          onChange={handleChange}
          name="lname"
          className="form-control"
          placeholder="Last Name"
        />

        <input
          type="text"
          onChange={handleChange}
          name="desig"
          className="form-control"
          placeholder="Current Job Title"
        />

        <input
          type="email"
          onChange={handleChange}
          name="email"
          className="form-control"
          placeholder="Email"
        />

        <input
          type="url"
          onChange={handleChange}
          name="linkedin"
          className="form-control"
          placeholder="LinkedIn"
        />

        <input
          type="url"
          onChange={handleChange}
          name="twitter"
          className="form-control"
          placeholder="Twitter"
        />

        <input
          type="tele"
          onChange={handleChange}
          name="phone"
          className="form-control"
          placeholder="Phone Number"
        />

        <input
          type="text"
          onChange={handleChange}
          name="addlineone"
          className="form-control"
          placeholder="Address Line 1"
        />

        <input
          type="text"
          onChange={handleChange}
          name="addlinetwo"
          className="form-control"
          placeholder="Address Line 2"
        />

        <input
          type="text"
          onChange={handleChange}
          name="city"
          className="form-control"
          placeholder="City"
        />

        <input
          type="text"
          onChange={handleChange}
          name="state"
          className="form-control"
          placeholder="State"
        />

        <input
          type="text"
          onChange={handleChange}
          name="country"
          className="form-control"
          placeholder="Country"
        />
      </form>
    </div>
  );
}

export default HeaderBuilder;
