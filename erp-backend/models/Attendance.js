const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Attendance = sequelize.define('Attendance', {
  attendance_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  employee_id: { type: DataTypes.STRING },
  date: DataTypes.DATEONLY,
  check_in_time: DataTypes.TIME,
  check_out_time: DataTypes.TIME,
  status: DataTypes.STRING,
  remarks: DataTypes.TEXT
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

module.exports = Attendance;
