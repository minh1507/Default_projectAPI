'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: Sequelize.STRING,
      password: Sequelize.TEXT
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('users');
  }
};
