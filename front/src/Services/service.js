const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Obtener todas las tareas
export const getTasks = async () => {
  const res = await fetch(`${API_URL}/tasks`);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return await res.json();
};

// Crear una nueva tarea
export const createTask = async (task) => {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Error al crear tarea");
  return await res.json();
};

// Editar una tarea existente
export const updateTask = async (id, updatedFields) => {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error("Error al actualizar tarea");
  return await res.json();
};

// Eliminar una tarea
export const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar tarea");
  return await res.json();
};


