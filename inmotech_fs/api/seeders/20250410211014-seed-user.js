'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { usuario: 'admin@email.com', contraseña: '123456', user_status_fk: 1, role_fk: 1, createdAt: new Date(), updatedAt: new Date() },
      { usuario: 'user1@email.com', contraseña: 'password1', user_status_fk: 1, role_fk: 2, createdAt: new Date(), updatedAt: new Date() },
      { usuario: 'user2@email.com', contraseña: 'password2', user_status_fk: 2, role_fk: 2, createdAt: new Date(), updatedAt: new Date() },
      { usuario: 'user3@email.com', contraseña: 'password3', user_status_fk: 3, role_fk: 3, createdAt: new Date(), updatedAt: new Date() },
      { usuario: 'user4@email.com', contraseña: 'password4', user_status_fk: 4, role_fk: 4, createdAt: new Date(), updatedAt: new Date() },
      { usuario: 'user5@email.com', contraseña: 'password5', user_status_fk: 1, role_fk: 3, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
