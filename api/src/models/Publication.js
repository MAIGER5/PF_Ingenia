const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Publication", {
    idPublications: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    text:{
        type: DataTypes.STRING(1234),
        allowNull: false,
    },
    img:{
        type:DataTypes.STRING,
        isUrl: true,
        allowNull: false,
    },
    subtitleTwo:{
      type: DataTypes.STRING,
    },
    textTwo:{
      type: DataTypes.STRING(1234),
    },
    subtitleThree:{
      type: DataTypes.STRING,
    },
    textThree:{
      type: DataTypes.STRING(1234),
    },
    asset: {
        type: DataTypes.BOOLEAN,
        default:false,
        allowNull: false,
      },
  });
};
