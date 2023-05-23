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
      type: DataTypes.STRING(1234),
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
    pro:{
      type:DataTypes.BOOLEAN,
      default:false
    },
    pricePro:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    dificulty: {
      type: DataTypes.ENUM("BASIC", "MEDIUM", "ADVANCED"),
      defaultValue: "MEDIUM",
      allowNull: false,
    },
    requirement:{
      type:DataTypes.STRING(1234),
      allowNull:false
    },
    learnTo:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    studyMethod:{
      type:DataTypes.STRING(1234),
      allowNull:true
    },
    asset: {
      type: DataTypes.BOOLEAN,
      default: true,
      allowNull: false,
    },
  });
};
