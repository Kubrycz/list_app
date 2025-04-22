import React, { useState } from "react";
import {
  PrimaryButton,
  Stack,
  TextField,
  Label,
  initializeIcons,
} from "@fluentui/react";

import "../SCSS/AddTask.scss"; // Główny plik SCSS
import { useTaskContext } from "../context/TaskContext";
import "../SCSS/AddTask/TaskList.scss";
import TaskList from "../components/TaskList";

const AddTask = () => {
  initializeIcons();
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
    <Stack>
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
