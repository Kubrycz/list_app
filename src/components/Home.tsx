import React, { useState } from "react";
import "../SCSS/Home.scss";
import { Stack } from "@fluentui/react";
import TaskList from "./TaskList";

const Home = () => {

  const [taskList, setTaskList] = useState<string[]>([]);

  const handleRemoveTask = (index: number) => {
    setTaskList((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="background">
      <div className="contener">
        <header className="header">
          <label className="font-big">To-Do App</label>
        </header>
        <div>
          <Stack className="task-list-container">
            <label className="font-big"></label>
            <TaskList tasks={taskList} onRemoveTask={handleRemoveTask} />
          </Stack>
        </div>
      </div>
    </div>
  );
};
export default Home;
