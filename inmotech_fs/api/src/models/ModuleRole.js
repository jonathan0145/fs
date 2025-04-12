const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ModuleRole = sequelize.define('ModuleRole', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  tableName: 'module_role',
  timestamps: false
});

module.exports = ModuleRole;