const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Payroll = sequelize.define('Payroll', {
  payroll_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  employee_id: { type: DataTypes.STRING },
  month: DataTypes.STRING,
  basic_salary: DataTypes.DECIMAL(10,2),
  allowances: DataTypes.DECIMAL(10,2),
  deductions: DataTypes.DECIMAL(10,2),
  net_pay: DataTypes.DECIMAL(10,2),
  status: DataTypes.STRING,
  generated_at: DataTypes.DATE,
  paid_at: DataTypes.DATE
}, {
  timestamps: false
});

module.exports = Payroll;
