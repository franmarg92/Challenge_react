import { Routes, Route } from "react-router-dom";
import TaskList from "./Components/taskList";

function App() {
  return (
    <div className="container">
      <h1>📋 Lista de Tareas</h1>

      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;