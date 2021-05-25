import React, { useContext } from "react";
import ResumeContext from "../../ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

function ThemeChanger() {
  function handleClick() {
    setIsDark((prev) => !prev);
  }

  const { isDark, setIsDark } = useContext(ResumeContext);

  return (
    <div
      title="Theme Changer(Random Color)"
      onClick={handleClick}
      className="theme-changer"
    >
      <FontAwesomeIcon icon={isDark ? faToggleOn : faToggleOff} />
    </div>
  );
}

export default ThemeChanger;
