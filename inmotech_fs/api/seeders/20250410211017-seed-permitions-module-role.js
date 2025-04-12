'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permition_module_role', [
      { module_role_fk: 1, permitions_fk: 1, createdAt: new Date(), updatedAt: new Date() },
      { module_role_fk: 1, permitions_fk: 2, createdAt: new Date(), updatedAt: new Date() },
      { module_role_fk: 2, permitions_fk: 3, createdAt: new Date(), updatedAt: new Date() },
      { module_role_fk: 2, permitions_fk: 4, createdAt: new Date(), updatedAt: new Date() },
      { module_role_fk: 3, permitions_fk: 5, createdAt: new Date(), updatedAt: new Date() },
      { module_role_fk: 3, permitions_fk: 6, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permition_module_role', null, {});
  }
};
