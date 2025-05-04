import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../Services/service";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error al cargar tareas:", err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleView = (id) => {
    navigate(`/tasks/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      console.error(err);
    }
  };

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
            <th scope="col">Aciones</th>
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
              <td>
                <button
                  className="btn btn-light"
                  onClick={() => handleView(task.id_task)}
                >
                  👁️
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => handleEdit(task.id_task)}
                >
                  ✏️
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => handleDelete(task.id_task)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={() => navigate("/create")}>
        Nueva tarea
      </button>
    </div>
  );
};

export default TaskList;
