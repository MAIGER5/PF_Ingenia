const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Sold", {
    idSold: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },{
    timestamps:false,
});
};
