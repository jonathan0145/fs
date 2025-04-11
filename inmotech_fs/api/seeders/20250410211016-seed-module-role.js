'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('module_role', [
      { module_fk: 1, role_fk: 1, createdAt: new Date(), updatedAt: new Date() },
      { module_fk: 2, role_fk: 2, createdAt: new Date(), updatedAt: new Date() },
      { module_fk: 3, role_fk: 3, createdAt: new Date(), updatedAt: new Date() },
      { module_fk: 4, role_fk: 4, createdAt: new Date(), updatedAt: new Date() },
      { module_fk: 5, role_fk: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('module_role', null, {});
  }
};
