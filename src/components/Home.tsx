import React from "react";
import {
  CommandBarButton,
  DefaultButton,
  initializeIcons,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import { WeatherSunnyRegular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

import "../SCSS/Home.scss"; // Główny plik SCSS

const Home = () => {
  initializeIcons();
  const navigate = useNavigate();

  return (
    <div className="background">
      <div className="contener">
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
        <body className="body">
          <Stack className="left-panel">
            <div className="border-line"></div>
            <div className="buttons-container">
              <CommandBarButton
                className="font-small"
                onClick={() => navigate("/")}
              >
                Home
              </CommandBarButton>
              <CommandBarButton
                className="font-small"
                onClick={() => navigate("/Home")}
              >
                AddTask
              </CommandBarButton>
            </div>
          </Stack>
          <Stack>
            <label className="font-big">Dashboard</label>
            <div className="form-container">
              <TextField
                placeholder="Add a new task"
                className="custom-textfield"
              ></TextField>
              <PrimaryButton className="primary-button">Add</PrimaryButton>
            </div>
            <Stack></Stack>
          </Stack>
        </body>
      </div>
    </div>
  );
};

export default Home;
