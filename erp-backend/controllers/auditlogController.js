const AuditLog = require('../models/AuditLog');

exports.listAuditLogs = async (req, res) => {
  const logs = await AuditLog.findAll();
  res.json(logs);
};

exports.addAuditLog = async (req, res) => {
  try {
    const log = await AuditLog.create(req.body);
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
