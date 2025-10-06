const Task = require('../models/Task');

exports.listTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.update(req.body, { where: { task_id: req.params.id } });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { task_id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
