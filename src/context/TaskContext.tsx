import React, { createContext, useContext, useState } from "react";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: number) => void;
  toggleTaskComplete: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]); // <-- TUTAJ!

  const addTask = (text: string) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleTaskComplete }}
    >
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
