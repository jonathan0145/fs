'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_status', [
      { nombre: 'Activo', descripcion: 'Usuario activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Inactivo', descripcion: 'Usuario inactivo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Suspendido', descripcion: 'Usuario suspendido temporalmente', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Eliminado', descripcion: 'Usuario eliminado del sistema', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_status', null, {});
  }
};
