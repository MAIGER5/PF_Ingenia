const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Buy", {
    idBuy: {
      type: DataTypes.INTEGER,
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
    userInstrucotor:{
      type:DataTypes.STRING
    }
  },{
    timestamps:false,
});
};
