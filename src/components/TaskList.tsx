import { DefaultButton, Icon, List } from "@fluentui/react";
import React from "react";

type TaskListProps = {
  tasks: string[];
  onRemoveTask: (index: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onRemoveTask }) => {
  return (
    <List
      items={tasks}
      onRenderCell={(item, index) =>
        index !== undefined ? (
          <div key={index}>
            <DefaultButton
              style={{
                border: "none",
                minWidth: "32px",
                height: "32px",
              }}
              onClick={() => onRemoveTask(index)}
            >
              <Icon iconName="Delete" />
            </DefaultButton>
            <span>{item}</span>
          </div>
        ) : null
      }
    />
  );
};
export default TaskList;
