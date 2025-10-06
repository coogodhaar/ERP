const Attendance = require('../models/Attendance');

exports.listAttendance = async (req, res) => {
  const data = await Attendance.findAll();
  res.json(data);
};

exports.addAttendance = async (req, res) => {
  try {
    const att = await Attendance.create(req.body);
    res.status(201).json(att);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
