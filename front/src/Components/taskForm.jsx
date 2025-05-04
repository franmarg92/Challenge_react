import { useState } from "react";
import { createTask } from "../Services/service";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    complete: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskData = {
        ...form,
        createdAt: new Date().toISOString(),
      };
      await createTask(taskData);
      navigate("/");
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  };

  return (
    <div>
      <div className="card p-4 shadow-sm bg-light">
        <h2>Nueva tarea</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="taskTitle" className="form-label">
              Título
            </label>
            <input
              type="text"
              className="form-control"
              id="taskTitle"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="taskDesc" className="form-label">
              Descripción
            </label>
            <textarea
              className="form-control"
              id="taskDesc"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="taskComplete"
              name="complete"
              checked={form.complete}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="taskComplete">
              ¿Tarea completada?
            </label>
          </div>

          <button type="submit" className="btn btn-success">
            Crear tarea
          </button>
        </form>
      </div>

      <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
        Volver al listado
      </button>
    </div>
  );
};

export default TaskForm;
