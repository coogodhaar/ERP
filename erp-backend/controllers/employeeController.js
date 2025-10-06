const bcrypt = require('bcryptjs');
const Employee = require('../models/Employee');

exports.listEmployees = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

exports.addEmployee = async (req, res) => {
  const { employee_id, first_name, last_name, email, phone, dob, role, position, date_joined, status, address, profile_image, password } = req.body;
  const password_hash = bcrypt.hashSync(password, 10);
  try {
    const emp = await Employee.create({
      employee_id, first_name, last_name, email, phone, dob, role, position, date_joined, status, address, profile_image, password_hash
    });
    res.status(201).json(emp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const emp = await Employee.update(req.body, { where: { employee_id: req.params.id } });
    res.json(emp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.destroy({ where: { employee_id: req.params.id } });
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
