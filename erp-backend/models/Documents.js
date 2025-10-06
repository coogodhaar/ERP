const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Documents = sequelize.define('Documents', {
  document_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  employee_id: { type: DataTypes.STRING },
  file_name: DataTypes.STRING,
  file_type: DataTypes.STRING,
  file_url: DataTypes.STRING,
  uploaded_at: DataTypes.DATE
}, {
  timestamps: false
});

module.exports = Documents;
