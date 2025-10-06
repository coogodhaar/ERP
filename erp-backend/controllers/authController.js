const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const config = require('../config/config');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Employee.findOne({ where: { email } });
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign(
    { id: user.employee_id, role: user.role },
    config.jwtSecret,
    { expiresIn: '8h' }
  );
  res.json({ token });
};
