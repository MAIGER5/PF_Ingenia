const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("User", {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    asset: {
      type: DataTypes.BOOLEAN,
      default:false,
      allowNull: false,
    },
  });
};
