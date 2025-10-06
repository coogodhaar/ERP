const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Employee = sequelize.define('Employee', {
  employee_id: { type: DataTypes.STRING, primaryKey: true },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  phone: DataTypes.STRING,
  dob: DataTypes.DATEONLY,
  role: DataTypes.STRING,
  position: DataTypes.STRING,
  date_joined: DataTypes.DATEONLY,
  status: DataTypes.STRING,
  address: DataTypes.TEXT,
  profile_image: DataTypes.STRING,
  password_hash: DataTypes.STRING
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Employee;
