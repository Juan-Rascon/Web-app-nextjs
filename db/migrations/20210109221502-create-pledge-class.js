'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pledgeClasses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      className: {
        type: Sequelize.STRING
      },
      pinDate: {
        type: Sequelize.DATE
      },
      crossingDate: {
        type: Sequelize.DATE
      },
      pinnedMembers: {
        type: Sequelize.INTEGER
      },
      crossedMembers: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pledgeClasses');
  }
};