import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTasks } from "../Services/service";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const allTasks = await getTasks();
        const found = allTasks.find((t) => t.id_task === parseInt(id));
        if (!found) throw new Error("Tarea no encontrada");
        setTask(found);
        setLoading(false);
      } catch (error) {
        console.error(error);
        navigate("/");
      }
    };
    fetchTask();
  }, [id, navigate]);

  if (loading) return <p>Cargando tarea...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 bg-white">
        <h4 className="mb-4 text-info">📄 Detalle de la tarea</h4>
        <p>
          <strong>ID:</strong> {task.id_task}
        </p>
        <p>
          <strong>Título:</strong> {task.title}
        </p>
        <p>
          <strong>Descripción:</strong> {task.description}
        </p>
        <p>
          <strong>Estado:</strong>{" "}
          {task.complete ? "✅ Completada" : "❌ Pendiente"}
        </p>
        <p>
          <strong>Fecha de creación:</strong>{" "}
          {new Date(task.createdAt).toLocaleDateString()}
        </p>

        <button
          className="btn btn-secondary mt-3"
          onClick={() => navigate("/")}
        >
          Volver al listado
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
