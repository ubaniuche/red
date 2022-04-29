'use strict';
import DB_TABLE from '../../constants/DbTable'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLE.LOADED_ITEMS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      drone_id: {
        type: Sequelize.INTEGER,
        refernce: {
          model: {
            tableName: DB_TABLE.DRONES,
            schema: "public",
          },
          key: "id",
        },
      },
      medication_id: {
        type: Sequelize.INTEGER,
        refernce: {
          model: {
            tableName: DB_TABLE.LOADED_ITEMS,
            schema: "public",
          },
          key: "id",
        },
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(DB_TABLE.LOADED_ITEMS);
  }
};
