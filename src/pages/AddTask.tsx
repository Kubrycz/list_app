import React, { useState } from "react";
import {
  CommandBarButton,
  PrimaryButton,
  Stack,
  TextField,
  Label,
} from "@fluentui/react";
import { useNavigate } from "react-router-dom";

import "../SCSS/AddTask.scss"; // Główny plik SCSS
import { useTaskContext } from "../context/TaskContext";
import "../SCSS/AddTask/TaskList.scss";
import Header from "../components/Header"; // Importujemy nasz komponent Header
import TaskList from "../components/TaskList";
import Layout from "../layout/Layout";

const AddTask = () => {
  const navigate = useNavigate();
  const { tasks, addTask, removeTask } = useTaskContext();
  const [textFieldValue, setTextFieldValue] = useState<string>("");
  const [maxTaskReached, setMaxTaskReached] = useState<boolean>(false);

  const handleAddTask = () => {
    if (tasks.length >= 20) {
      setMaxTaskReached(true);
    } else if (textFieldValue.trim() !== "") {
      addTask(textFieldValue);
      setTextFieldValue("");
      setMaxTaskReached(false);
    }
  };

  const handleTextFieldChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (newValue !== undefined) {
      setTextFieldValue(newValue);
    }
  };

  const handleRemoveTask = (id: number) => {
    removeTask(id);
  };

  return (
    // <div className="background">
    //   <div className="contener">
    //     {/* <Header /> Używamy komponentu Header */}
    //     <div className="body">
    //       <Stack className="left-panel">
    //         <div className="border-line"></div>
    //         <div className="buttons-container">
    //           <CommandBarButton
    //             className="font-small"
    //             onClick={() => navigate("/")}
    //           >
    //             Home
    //           </CommandBarButton>
    //           <CommandBarButton
    //             className="font-small"
    //             onClick={() => navigate("/add_task")}
    //           >
    //             AddTask
    //           </CommandBarButton>
    //         </div>
    //       </Stack>
      <Stack className="dopoprawy">
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
            You have reached the maximum number of tasks
          </Label>
        )}
        <Stack className="task-list-container">
          <label className="font-big"></label>
          <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
        </Stack>
      </Stack>
  );
};

export default AddTask;
