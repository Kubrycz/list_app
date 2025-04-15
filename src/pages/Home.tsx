import React from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";

const Home = () => {
  const { tasks, removeTask } = useTaskContext();

  return (
    <div>
      <div>Home</div>
      <TaskList tasks={tasks} onRemoveTask={removeTask} />
    </div>
  );
};
export default Home;
