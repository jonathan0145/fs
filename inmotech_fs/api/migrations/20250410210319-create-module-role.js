'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('module_role', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      module_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'module',
          key: 'id'
        }
      },
      role_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'role',
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
    await queryInterface.dropTable('module_role');
  }
};