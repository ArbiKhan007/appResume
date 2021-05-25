import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";

function Contact() {
  const { text } = useContext(ResumeContext);

  return (
    <>
      <div style={{ margin: "0.8rem", maxWidth: "25%" }}>
        <h3>Info</h3>
        <h5>Email</h5>
        <h6>{text.email}</h6>
        <h5>Phone</h5>
        <h6>{text.phone}</h6>
        <h5>Linkedin</h5>
        <h6>linkedin.com/{text.linkedin}</h6>
        <h5>Email</h5>
        <h6>{text.email}</h6>
      </div>
    </>
  );
}

export default Contact;
