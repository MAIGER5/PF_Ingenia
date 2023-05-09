const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Assessment", {
    idAssessment: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    timestamps:false,
});
};