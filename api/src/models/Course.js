const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Course", {
    idCourse: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      isUrl:true,
      allowNull: false,
    },
    lenguage: {
      type: DataTypes.ENUM("ESPAÑOL", "ENGLISH"),
      allowNull: false,
      defaultValue: "ESPAÑOL",
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    pricePro:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    habilities: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty: {
      type: DataTypes.ENUM("BASIC", "MEDIUM", "ADVANCED"),
      defaultValue: "MEDIUM",
      allowNull: false,
    },
    requirement:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    asset: {
      type: DataTypes.BOOLEAN,
      default: false,
      allowNull: false,
    },
  });
};
