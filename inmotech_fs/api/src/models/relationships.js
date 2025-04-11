const User = require('./User');
const UserStatus = require('./UserStatus');
const Profile = require('./Profile');
const Role = require('./Role');
const Permition = require('./Permition');
const Module = require('./Module');
const ModuleRole = require('./ModuleRole');
const PermitionsModuleRole = require('./PermitionsModuleRole');

const defineRelationships = () => {
  // Relación entre User y UserStatus
  User.belongsTo(UserStatus, { foreignKey: 'user_status_fk' });
  UserStatus.hasMany(User, { foreignKey: 'user_status_fk' });

  // Relación entre User y Role
  User.belongsTo(Role, { foreignKey: 'role_fk' });
  Role.hasMany(User, { foreignKey: 'role_fk' });

  // Relación entre User y Profile
  User.hasOne(Profile, { foreignKey: 'user_fk' });
  Profile.belongsTo(User, { foreignKey: 'user_fk' });

  // Relación entre ModuleRole y Module
  ModuleRole.belongsTo(Module, { foreignKey: 'module_fk' });
  Module.hasMany(ModuleRole, { foreignKey: 'module_fk' });

  // Relación entre ModuleRole y Role
  ModuleRole.belongsTo(Role, { foreignKey: 'role_fk' });
  Role.hasMany(ModuleRole, { foreignKey: 'role_fk' });

  // Relación entre PermitionsModuleRole y ModuleRole
  PermitionsModuleRole.belongsTo(ModuleRole, { foreignKey: 'module_role_fk' });
  ModuleRole.hasMany(PermitionsModuleRole, { foreignKey: 'module_role_fk' });

  // Relación entre PermitionsModuleRole y Permition
  PermitionsModuleRole.belongsTo(Permition, { foreignKey: 'permitions_fk' });
  Permition.hasMany(PermitionsModuleRole, { foreignKey: 'permitions_fk' });
};

module.exports = defineRelationships;