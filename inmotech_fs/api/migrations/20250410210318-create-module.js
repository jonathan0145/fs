'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('module', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      ruta: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: true // Add unique constraint
      },
      descripcion: {
        type: Sequelize.STRING(100),
        allowNull: true
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
    await queryInterface.dropTable('module');
  }
};