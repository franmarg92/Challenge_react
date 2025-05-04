const { taskService } = require('../Services');

const getAllTask = async (req, res, next) => {
  try {
    const tasks = await taskService.getAllTask();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, description, complete, createdAt } = req.body;
    const newTask = await taskService.createTask(title, description, complete, createdAt);
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await taskService.deleteTask(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const updatedFields = req.body;
    const updated = await taskService.updateTask(id, updatedFields);
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getAllTask, createTask, deleteTask, updateTask}

