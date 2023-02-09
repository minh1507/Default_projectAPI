"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cats", [
      {
        name: "cat1",
        age: 1,
      },
      {
        name: "cat2",
        age: 2,
      },
      {
        name: "cat3",
        age: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('cats', null, {where: {name: "cat1"}});
     await queryInterface.bulkDelete('cats', null, {where: {name: "cat2"}});
     await queryInterface.bulkDelete('cats', null, {where: {name: "cat3"}});
  },
};
