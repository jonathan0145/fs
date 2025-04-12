'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role', [
      { nombre: 'Admin', descripcion: 'Administrador del sistema', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Editor', descripcion: 'Puede editar contenido', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Usuario', descripcion: 'Usuario regular del sistema', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Supervisor', descripcion: 'Supervisa y gestiona usuarios', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role', null, {});
  }
};
