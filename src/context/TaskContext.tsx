import React, { createContext, useContext, useState } from "react";

 export interface Task {
  id: number;
  text: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]); // <-- TUTAJ!

  const addTask = (text: string) => {
    const newTask = { id: Date.now(), text };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
