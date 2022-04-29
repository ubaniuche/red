'use strict';
import DB_TABLE from '../../constants/DbTable'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLE.MEDICATIONS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(DB_TABLE.MEDICATIONS);
  }
};
