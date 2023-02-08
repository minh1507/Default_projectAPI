module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('cats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      age: Sequelize.INTEGER
    });
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('cats');
  }
};