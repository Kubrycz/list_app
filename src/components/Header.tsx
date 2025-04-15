import React from "react";
import { DefaultButton } from "@fluentui/react";
import { WeatherSunnyRegular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import "../SCSS/AddTask/Header.scss"; 

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <label className="font-big">To-Do App</label>
      <div>
        <DefaultButton className="font-small" style={{ border: "none" }}>
          Settings
        </DefaultButton>
        <DefaultButton className="button">
          <WeatherSunnyRegular
            className="button"
            style={{ fontSize: 24, color: "black" }}
          />
        </DefaultButton>
      </div>
    </header>
  );
};

export default Header;
