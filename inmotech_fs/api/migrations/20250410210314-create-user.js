'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      usuario: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true // Add unique constraint
      },
      contraseña: {
        type: Sequelize.STRING(256),
        allowNull: false
      },
      user_status_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user_status',
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
    await queryInterface.dropTable('users');
  }
};