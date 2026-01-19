import { useTaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";
import { Stack } from "@fluentui/react";

const Home = () => {
  const { tasks, removeTask, toggleTaskComplete } = useTaskContext();

  return (
    <div>
      <div className="font-small">Your tasks</div>
      <Stack className="task-list-container">
        <label className="font-big"></label>
        <TaskList
          tasks={tasks}
          onRemoveTask={removeTask}
          onToggleComplete={toggleTaskComplete} 
        />
      </Stack>
    </div>
  );
};
export default Home;
