import { TaskProvider } from "../context/TaskContext";
import { ThemeProvider } from "../context/ThemeContext";
import Routing from "../Navigation/Routing";

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Routing />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
