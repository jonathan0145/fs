const { Sequelize } = require('sequelize');
const defineRelationships = require('../models/relationships');

// Inicializar Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false
});

// Importar modelos
const User = require('../models/User');
const UserStatus = require('../models/UserStatus');
const Profile = require('../models/Profile');
const Role = require('../models/Role');
const Permition = require('../models/Permition');
const Module = require('../models/Module');
const ModuleRole = require('../models/ModuleRole');
const PermitionsModuleRole = require('../models/PermitionsModuleRole');

// Definir relaciones
defineRelationships();

module.exports = sequelize;