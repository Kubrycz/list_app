import { TaskProvider } from "../context/TaskContext";
import { ThemeProvider } from "../context/ThemeContext";
import Routing from "../navigation/Routing";

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
