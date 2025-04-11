'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profile', [
      { nombre: 'Juan Perez', telefono: '1234567890', direccion: 'Calle 123', email: 'juan@example.com', foto: 'foto1.jpg', user_fk: 1, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Maria Lopez', telefono: '9876543210', direccion: 'Calle 456', email: 'maria@example.com', foto: 'foto2.jpg', user_fk: 2, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Carlos Ruiz', telefono: '1122334455', direccion: 'Calle 789', email: 'carlos@example.com', foto: 'foto3.jpg', user_fk: 3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Ana Torres', telefono: '6677889900', direccion: 'Calle 101', email: 'ana@example.com', foto: 'foto4.jpg', user_fk: 4, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Pedro Gomez', telefono: '2233445566', direccion: 'Calle 202', email: 'pedro@example.com', foto: 'foto5.jpg', user_fk: 5, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Laura Mendoza', telefono: '9988776655', direccion: 'Calle 303', email: 'laura@example.com', foto: 'foto6.jpg', user_fk: 6, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('profile', null, {});
  }
};
