'use strict';
import DB_TABLE from '../../constants/DbTable'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLE.DRONE_LOAD, {
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
      weight: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(DB_TABLE.DRONE_LOAD);
  }
};
