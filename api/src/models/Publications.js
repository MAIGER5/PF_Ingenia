const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Publications", {
    idPublications: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag:{
        type: DataTypes.ARRAY,
        allowNull: false,
    },
    publications:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgProfile:{
        type:DataTypes.STRING,
        isUrl: true,
        allowNull: false,
    },
    asset: {
        type: DataTypes.BOOLEAN,
        default:false,
        allowNull: false,
      },
  });
};
