'use strict';
import DB_TABLE from '../../constants/DbTable'
import DRONE from '../../constants/Drone'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLE.DRONES, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      serial_number: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false,
      },
      model_id: {
        type: Sequelize.INTEGER,
        refernce: {
          model: {
            tableName: DB_TABLE.DRONE_MODELS,
            schema: "public",
          },
          key: "id",
        },
      },
      battery_capacity: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM(DRONE.STATE),
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(DB_TABLE.DRONES);
  }
};
