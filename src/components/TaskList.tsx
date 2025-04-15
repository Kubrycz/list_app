import { DefaultButton, Icon, List } from "@fluentui/react";
import React from "react";
import { Task } from "../context/TaskContext";

type TaskListProps = {
  tasks: Task[];
  onRemoveTask: (index: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask }) => {
  return (
    <List
      items={tasks}
      onRenderCell={(item) =>
        item ? (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <DefaultButton
              style={{
                border: "none",
                minWidth: "32px",
                height: "32px",
                marginRight: "8px",
              }}
              onClick={() => onRemoveTask(item.id)}
            >
              <Icon iconName="Delete" />
            </DefaultButton>
            <span>{item.text}</span>
          </div>
        ) : null
      }
    />
  );
};

export default TaskList;
