import React from "react";
import { useState, useEffect } from "react";
import "./index.css"; // Import the CSS file
import ReactLogo from "./Components/ReactLogo.jsx"; // Import the ReactLogo component
const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [logoAnimation, setLogoAnimation] = useState("static"); // State for animation
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle based on current state
  };
  const toggleLogoAnimation = () => {
    setLogoAnimation(logoAnimation === "animate" ? "static" : "animate");
  };

  useEffect(() => {
    const logo = document.getElementById("my-react-logo");
    if (logoAnimation === "animate") {
      if (logo) logo.classList.add("logo-spin"); // Assuming you have a CSS class 'logo-spin'
      console.log("spin mounted");
    } else {
      // Remove animation (if necessary)
      if (logo) logo.classList.remove("logo-spin");
    }

    // Cleanup function:
    return () => {
      // Remove any lingering animation styles on unmount
      const logo = document.getElementById("my-react-logo");
      if (logo) logo.classList.remove("logo-spin");
      console.log("spin is unmounted");
    };
  }, [logoAnimation]);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
  }, [darkMode]);
  return (
    <>
      <div>
        <button
          onClick={() => {
            toggleDarkMode();
            toggleLogoAnimation();
          }}
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
        {darkMode && <ReactLogo id="my-react-logo" className={logoAnimation} />}
      </div>
    </>
  );
};

export default App;
