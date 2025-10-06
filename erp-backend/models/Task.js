const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Task = sequelize.define('Task', {
  task_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  assigned_by: { type: DataTypes.STRING },
  assigned_to: { type: DataTypes.STRING },
  status: DataTypes.STRING,
  due_date: DataTypes.DATEONLY
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Task;
