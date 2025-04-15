import React from "react";
import { CommandBarButton, Stack } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import "../SCSS/AddTask/LeftSideMenu.scss"; // Importowanie stylów dla LeftSideMenu

const LeftSideMenu = () => {
  const navigate = useNavigate();

  return (
    <Stack className="left-panel">
      <div className="border-line"></div>
      <div className="buttons-container">
        <CommandBarButton className="font-small" onClick={() => navigate("/")}>
          Home
        </CommandBarButton>
        <CommandBarButton
          className="font-small"
          onClick={() => navigate("/add_task")}
        >
          AddTask
        </CommandBarButton>
      </div>
    </Stack>
  );
};

export default LeftSideMenu;
