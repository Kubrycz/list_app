import { fireEvent, render, screen } from "@testing-library/react";
import { TaskProvider } from "../context/TaskContext";
import AddTask from "../pages/AddTask";

describe("AddTask component", () => {
  it("adds a task when clicking the button", () => {
    render(
      <TaskProvider>
        <AddTask />
      </TaskProvider>
    );

    const input = screen.getByPlaceholderText(/add a new task/i);
    fireEvent.change(input, { target: { value: "Test task" } });

    const button = screen.getByText(/add/i);
    fireEvent.click(button);

    expect(screen.getByText("Test task")).toBeInTheDocument();
  });

  it("shows error when trying to add more than 20 tasks", () => {
    render(
      <TaskProvider>
        <AddTask />
      </TaskProvider>
    );

    const input = screen.getByPlaceholderText(/add a new task/i);
    const button = screen.getByText(/add/i);

    for (let i = 0; i < 21; i++) {
      fireEvent.change(input, { target: { value: `Task ${i}` } });
      fireEvent.click(button);
    }
    expect(
      screen.getByText(/you have reached the maximum number of tasks/i)
    ).toBeInTheDocument();
  });
});
