const { taskModel } = require("../Models")




const getAllTask = async() =>{
    try {
        const allTask = await taskModel.findAll()
        if (allTask.length === 0) {
            const error = new Error()
            error.message = 'No hay contenido.'
            error.statusCode = 404
            throw error
        }
        return allTask
    } catch (error) {
        throw error
    }
}


const createTask = async(title, description, complete, createdAt) =>{
    try {
        const newTask = await taskModel.create({
            title,
            description,
            complete,
            createdAt,
        });
        
        return newTask
        
    } catch (error) {
        throw error
    }
}

const deleteTask = async (id_task) => {
    try {
      const task = await taskModel.findByPk(id_task);
  
      if (!task) {
        const error = new Error('Tarea no encontrada');
        error.statusCode = 404;
        throw error;
      }
  
      await task.destroy();
      return { message: 'Tarea eliminada correctamente' };
    } catch (error) {
      throw error;
    }
  };

  const updateTask = async (id_task, updatedFields) => {
    try {
      const task = await taskModel.findByPk(id_task);
  
      if (!task) {
        const error = new Error('Tarea no encontrada');
        error.statusCode = 404;
        throw error;
      }
  
      await task.update(updatedFields);
      return task;
    } catch (error) {
      throw error;
    }
  };

  module.exports = { getAllTask, createTask, deleteTask, updateTask}