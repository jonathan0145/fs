const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true // Asegurar unicidad
  },
  foto: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  user_fk: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    unique: true // Asegurar unicidad
  }
}, {
  tableName: 'profile',
  timestamps: true // Para createdAt y updatedAt
});

module.exports = Profile;