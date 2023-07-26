const Task = require("../models/Task");

const validateIdStructure = (id) => {
  if (!id.match(/^[0-9a-fA-F]{24}$/))
    throw new Error("Invalid task identifier.");
};

const createTask = async (task) => {
  const result = await Task.create(task);
  return result;
};

const getAllTasks = async () => {
  const allTasks = await Task.find();
  return allTasks;
};

const getTaskById = async (id) => {
  validateIdStructure(id);
  const task = await Task.findOne({ _id: id });
  if (!task) throw new Error("Task with provided identifier does not exist.");
  return task;
};

const deleteTask = async (id) => {
  validateIdStructure(id);
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) throw new Error("Task with provided identifier does not exist.");
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  deleteTask,
};