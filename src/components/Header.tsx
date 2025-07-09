import React from "react";
import { DefaultButton, initializeIcons } from "@fluentui/react";
import { WeatherMoonRegular, WeatherSunnyRegular } from "@fluentui/react-icons";
import "../SCSS/AddTask/Header.scss";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  initializeIcons();

  const {isDark, toggleTheme} = useTheme();

  return (
    <header className="header">
      <label className="font-big">To-Do App</label>
      <div>
        <DefaultButton className="font-small" style={{ border: "none" }}>
          Settings
        </DefaultButton>
        <DefaultButton
          className="button"
          onClick={toggleTheme}
          style={{ border: "none", background: "transparent" }}
        >
          {isDark ? (
            <WeatherMoonRegular style={{ fontSize: 30, color: "yellow" }} />
          ) : (
            <WeatherSunnyRegular style={{ fontSize: 30, color: "black" }} />
          )}
        </DefaultButton>
      </div>
    </header>
  );
};

export default Header;
