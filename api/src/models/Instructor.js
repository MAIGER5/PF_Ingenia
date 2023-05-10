const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Instructor", {
    idInstructor: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    asset: {
      type: DataTypes.BOOLEAN,
      default: false,
      allowNull: false,
    },
  });
};
