const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Favorite", {
    idFavorite: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idCor:{
      type: DataTypes.INTEGER
    }
  },{
    timestamps:false,
});
};