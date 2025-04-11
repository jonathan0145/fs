const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true // Asegurar unicidad
  },
  contraseña: {
    type: DataTypes.STRING(256),
    allowNull: false
  },
  user_status_fk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user_status',
      key: 'id'
    }
  },
  role_fk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'role',
      key: 'id'
    }
  }
}, {
  tableName: 'users',
  timestamps: true // Para createdAt y updatedAt
});

module.exports = User;