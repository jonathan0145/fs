'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permition_module_role', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      module_role_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'module_role',
          key: 'id'
        }
      },
      permitions_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'permition',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('permition_module_role');
  }
};