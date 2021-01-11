'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pledgeClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pledgeClass.init({
    className: DataTypes.STRING,
    pinDate: DataTypes.DATE,
    crossingDate: DataTypes.DATE,
    pinnedMembers: DataTypes.INTEGER,
    crossedMembers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pledgeClass',
  });
  return pledgeClass;
};