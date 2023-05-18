const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Buy", {
    idBuy: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
};
