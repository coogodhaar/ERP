const Leave = require('../models/Leave');

exports.listLeave = async (req, res) => {
  const data = await Leave.findAll();
  res.json(data);
};

exports.addLeave = async (req, res) => {
  try {
    const leave = await Leave.create(req.body);
    res.status(201).json(leave);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
