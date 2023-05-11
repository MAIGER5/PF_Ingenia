const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Bill", {
    idBill: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
};
