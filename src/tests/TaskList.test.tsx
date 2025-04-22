import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { Task } from "../context/TaskContext";

const tasks: Task[] = [
  { id: 1, text: "First Task", completed: false },
  { id: 2, text: "Second Task", completed: true },
];

describe("TaskList component", () => {
  it("renders all tasks", () => {
    render(<TaskList tasks={tasks} onRemoveTask={() => {}} />);
    expect(screen.getByText("First Task")).toBeInTheDocument();
    expect(screen.getByText("Second Task")).toBeInTheDocument();
  });

  it("calls onRemoveTask when delete is clicked", () => {
    const removeMock = jest.fn();
    render(<TaskList tasks={tasks} onRemoveTask={removeMock} />);

    const deleteButtons = screen.getAllByRole("button");
    fireEvent.click(deleteButtons[0]);

    expect(removeMock).toHaveBeenCalledWith(1);
  });
});
