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

    const themeButton = screen.getByRole("button", { name: "" }); // the icon has no text
    fireEvent.click(themeButton);

    // Po kliknięciu, spodziewamy się zmiany koloru lub ikony,
    // więc można np. sprawdzić ikonę lub atrybut data-theme w dokumencie
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector("[data-theme='dark']")).toBeInTheDocument();
  });
});
