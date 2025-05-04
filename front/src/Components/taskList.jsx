// src/pages/TaskList.jsx
import { useEffect, useState } from "react";
import { getTasks } from "../Services/service";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div>
      


      <table className="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Título</th>
      <th scope="col">Descripción</th>
      <th scope="col">Completado</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody>
    {tasks.map((task, index) => (
      <tr key={task.id_task}>
        <th scope="row">{task.id_task}</th>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.complete ? "✔️" : "❌"}</td>
        <td>{new Date(task.createdAt).toLocaleDateString()}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};






export default TaskList;
