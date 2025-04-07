import React, { useState } from "react";
import {
  CommandBarButton,
  DefaultButton,
  Icon,
  initializeIcons,
  Label,
  List,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import { WeatherSunnyRegular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

import "../SCSS/AddTask.scss"; // Główny plik SCSS

const AddTask = () => {
  initializeIcons();
  const navigate = useNavigate();

  const [textFieldValue, setTextFieldValue] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const [maxTaskReached, setMaxTaskReached] = useState<boolean>(false);

  // Funkcja dodająca zadanie do listy
  const handleAddTask = () => {
    if (taskList.length >= 20) {
      setMaxTaskReached(true);
    } else {
      if (textFieldValue.trim() !== "") {
        setTaskList((prevTasks) => [...prevTasks, textFieldValue]);
        setTextFieldValue("");
        setMaxTaskReached(false);
      }
    }
  };

  // Funkcja obsługująca zmianę tekstu w polu
  const handleTextFieldChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (newValue !== undefined) {
      setTextFieldValue(newValue);
    }
  };

  const handleRemoveTask = (index: number) => {
    setTaskList((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };
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
        <div className="body">
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
                onClick={() => navigate("/add_task")}
              >
                AddTask
              </CommandBarButton>
            </div>
          </Stack>
          <Stack>
            <div className="font-big">Dashboard</div>
            <div className="form-container">
              <TextField
                placeholder="Add a new task"
                className="custom-textfield"
                value={textFieldValue}
                maxLength={20}
                onChange={handleTextFieldChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTask();
                  }
                }}
              />
              <PrimaryButton className="primary-button" onClick={handleAddTask}>
                Add
              </PrimaryButton>
            </div>
            {maxTaskReached && (
              <Label style={{ color: "red" }}>
                You reach the maximum number of tasks
              </Label>
            )}
            <Stack className="task-list-container">
              <label className="font-big"></label>
              <List
                items={taskList}
                onRenderCell={(item, index) =>
                  index !== undefined ? (
                    <div key={index}>
                      <DefaultButton
                        style={{
                          border: "none",
                          minWidth: "32px",
                          height: "32px",
                        }}
                        onClick={() => handleRemoveTask(index)}
                      >
                        <Icon iconName="Delete" />
                      </DefaultButton>
                      <span>{item}</span>
                    </div>
                  ) : null
                }
              />
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
