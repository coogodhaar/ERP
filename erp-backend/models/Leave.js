const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Leave = sequelize.define('Leave', {
  leave_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  employee_id: { type: DataTypes.STRING },
  start_date: DataTypes.DATEONLY,
  end_date: DataTypes.DATEONLY,
  leave_type: DataTypes.STRING,
  status: DataTypes.STRING,
  applied_at: DataTypes.DATE,
  approved_by: DataTypes.STRING,
  remarks: DataTypes.TEXT
}, {
  timestamps: false
});

module.exports = Leave;
