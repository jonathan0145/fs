'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('module', [
      { nombre: 'Usuarios', ruta: '/users', descripcion: 'Módulo de gestión de usuarios', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Roles', ruta: '/roles', descripcion: 'Módulo de gestión de roles', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Permisos', ruta: '/permissions', descripcion: 'Módulo de gestión de permisos', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Reportes', ruta: '/reports', descripcion: 'Módulo de generación de reportes', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Configuración', ruta: '/settings', descripcion: 'Módulo de configuración general', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('module', null, {});
  }
};
