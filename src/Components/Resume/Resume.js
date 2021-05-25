import React from "react";
import Experience from "./Experience";
import Header from "./Header";
import Qualification from "./Qualification";
import Skills from "./Skills";

function Resume(props) {
  return (
    <div className="resume-container">
      <div id="resume">
        <Header />

        <div className="resume__body">
          <Experience />

          <Qualification />

          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Resume;
