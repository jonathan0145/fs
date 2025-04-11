const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Module = sequelize.define('Module', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  ruta: {
    type: DataTypes.STRING(30),
    allowNull: true,
    unique: true // Asegurar unicidad
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'module',
  timestamps: true // Para createdAt y updatedAt
});

module.exports = Module;
