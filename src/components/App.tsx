import { TaskProvider } from "../context/TaskContext";
import Routing from "../navigation/Routing";

function App() {
  return (
    <TaskProvider>
      <Routing />
    </TaskProvider>
  );
}

export default App;
