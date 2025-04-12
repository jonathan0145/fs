'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permition', [
      { nombre: 'Crear', descripcion: 'Permite crear registros', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Editar', descripcion: 'Permite editar registros', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Consultar', descripcion: 'Permite consultar registros', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Eliminar', descripcion: 'Permite eliminar registros', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Imprimir', descripcion: 'Permite imprimir registros', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Descargar', descripcion: 'Permite descargar registros', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permition', null, {});
  }
};
