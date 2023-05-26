const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Assessment", {
    idAssessment: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idCor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    timestamps:false,
});
};