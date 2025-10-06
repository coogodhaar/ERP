const Roles = require('../models/Roles');

exports.listRoles = async (req, res) => {
  const roles = await Roles.findAll();
  res.json(roles);
};

exports.addRole = async (req, res) => {
  try {
    const role = await Roles.create(req.body);
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const role = await Roles.update(req.body, { where: { role_id: req.params.id } });
    res.json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    await Roles.destroy({ where: { role_id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
