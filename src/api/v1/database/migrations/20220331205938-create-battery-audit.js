'use strict';
import DB_TABLE from '../../constants/DbTable'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLE.BATTERY_AUDIT, {
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
      battery_capacity: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(DB_TABLE.BATTERY_AUDIT);
  }
};
