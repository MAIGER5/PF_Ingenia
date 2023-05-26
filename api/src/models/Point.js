const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Point", {
    idPoint: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    assessment:{
      type:DataTypes.DOUBLE,
      allowNull: false,
    },
    comement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};