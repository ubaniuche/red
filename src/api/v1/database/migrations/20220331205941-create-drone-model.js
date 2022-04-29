'use strict';
import DB_TABLE from '../../constants/DbTable'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLE.DRONE_MODELS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      weight_limit: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(DB_TABLE.DRONE_MODELS);
  }
};
