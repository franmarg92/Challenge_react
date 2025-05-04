import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateTask, getTasks } from "../Services/service";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    complete: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const allTasks = await getTasks();
        const task = allTasks.find((t) => t.id_task === parseInt(id));
        if (!task) throw new Error("Tarea no encontrada");
        setForm({
          title: task.title,
          description: task.description,
          complete: task.complete,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error cargando tarea:", error);
        navigate("/");
      }
    };

    fetchTask();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(id, form);
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
    }
  };

  if (loading) return <p>Cargando tarea...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 bg-light">
        <h4 className="mb-4 text-warning">✏️ Editar tarea</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              name="description"
              className="form-control"
              value={form.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="complete"
              checked={form.complete}
              onChange={handleChange}
              id="editComplete"
            />
            <label className="form-check-label" htmlFor="editComplete">
              ¿Tarea completada?
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Guardar cambios
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
