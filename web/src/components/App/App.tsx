import React, { useState } from "react";
import "./App.css";
import Sidebar from "../Sidebar";
import MainView from "../MainView";
import Button from "../Button";
import { FiMoon, FiSun } from "react-icons/fi";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  let className = "app";
  if (darkTheme) className += " dark";

  return (
    <div className={className}>
      <Sidebar />
      <MainView />

      <div className="style-switcher">
        <Button
          type="secondary"
          shape="circle"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? <FiSun /> : <FiMoon />}
        </Button>
      </div>
    </div>
  );
}

export default App;
