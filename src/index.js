import React, { useState } from "react";
import ReactDOM from "react-dom";
import ResumeContext from "./ResumeContext";
import Resume from "./Components/Resume/Resume";
import ResumeBuilder from "./Components/Builder/ResumeBuilder";
import OutputModal from "./Components/OutputModal/OutputModal";

import "./css/main.css";

function MainComponent() {
  const [text, setText] = useState({
    fName: "John",
    lname: "Doe",
    desig: "Current Job Title",
    email: "lorem@ipsum.com",
    phone: "Phone Number",
    addlineone: "Address Line One",
    addlinetwo: "Line Two",
    city: "New York",
    state: "New York",
    country: "US",
    linkedin: "linkedin.com/lorem",
    twitter: "@loremipsum",
    firstJob: "Current Post",
    prevJob: "Previous Post",
    startDate: "Start Date",
    startDateTwo: "Start Date",
    endDate: "End Date",
    descriptionOne: "Lorem Ipsum",
    descriptionTwo: "Lorem Ipsum",
    descriptionThree: "Lorem Ipsum",
    descriptionFour: "Lorem Ipsum",
    descriptionFive: "Lorem Ipsum",
    descriptionSix: "Lorem Ipsum",
    school: "School",
    degreeSchool: "Degree",
    fromSchool: "From",
    toSchool: "To",
    college: "College",
    degreeCollege: "Degree",
    fromCollege: "From",
    toCollege: "To",
    skillOne: "Skill",
    skillTwo: "Skill",
    skillThree: "Skill",
    skillFour: "Skill",
  });

  localStorage.setItem("user", text);

  const [isDark, setIsDark] = useState(false);

  const [isOutputted, setIsOutputted] = useState(false);

  function setTextOnScreen(Event) {
    const target = Event.target;
    const name = target.name;
    const value = target.value;

    setText({
      ...text,
      [name]: value,
    });
  }

  return (
    <ResumeContext.Provider
      value={{
        setTextOnScreen,
        setIsDark,
        setIsOutputted,
        setText,
        text,
        isDark,
        isOutputted,
      }}
    >
      <div className="app">
        <ResumeBuilder />

        <Resume text={text} />

        <OutputModal />
      </div>
    </ResumeContext.Provider>
  );
}

ReactDOM.render(<MainComponent />, document.getElementById("root"));
