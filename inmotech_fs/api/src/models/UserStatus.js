const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserStatus = sequelize.define('UserStatus', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true // Asegurar unicidad
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'user_status',
  timestamps: true // Para createdAt y updatedAt
});

module.exports = UserStatus;