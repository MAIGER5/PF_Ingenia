const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("User", {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password:{ 
        type:DataTypes.STRING,
        allowNull:false,
    },
    imgProfile:{
        type:DataTypes.STRING,
        isUrl: true,
    },
    description:{
      type:DataTypes.STRING,
    },
    Is:{
      type: DataTypes.ENUM('STUDEN','INSTRUCTOR','ADMIN')
    },
    assessment:{
      type:DataTypes.DOUBLE,
    },
    studies:{
      type:DataTypes.STRING
    },
    asset: {
      type: DataTypes.BOOLEAN,
      default:true,
      allowNull: false,
    } 
  });
};
