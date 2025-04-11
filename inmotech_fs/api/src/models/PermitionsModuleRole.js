const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PermitionsModuleRole = sequelize.define('PermitionsModuleRole', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  tableName: 'permition_module_role',
  timestamps: false
});

module.exports = PermitionsModuleRole;