import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { ThemeProvider } from "../context/ThemeContext";

describe("Header component", () => {
  it("toggles theme on button click", () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const themeButton = screen.getByRole("button", { name: "" });
    expect(document.querySelector("[data-theme='dark']")).toBeInTheDocument();
  });
});
