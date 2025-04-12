'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profile', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      direccion: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true // Add unique constraint
      },
      foto: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      user_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        unique: true // Add unique constraint
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
    await queryInterface.dropTable('profile');
  }
};