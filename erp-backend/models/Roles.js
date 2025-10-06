const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Roles = sequelize.define('Roles', {
  role_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  role_name: { type: DataTypes.STRING, unique: true },
  permissions: DataTypes.TEXT
}, {
  timestamps: false
});

module.exports = Roles;
