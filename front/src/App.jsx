import { Routes, Route } from "react-router-dom";
import TaskList from "./Components/taskList";
import TaskForm from "./Components/taskForm";
import EditTask from "./Components/editTask.jsx";
import TaskDetail from "./Components/taskDetail";



function App() {
  return (
    <div className="container">
      <h1>📋 Lista de Tareas</h1>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<TaskForm />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;