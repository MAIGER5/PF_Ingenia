const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Bill", {
    idBill: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email_paypal:{
      type:DataTypes.STRING
    },
    name_paypal:{
      type:DataTypes.STRING
    },
    lastname_paypal:{
      type:DataTypes.STRING
    },
    total_billed:{
      type:DataTypes.INTEGER
    },
    fee_paypal:{
      type:DataTypes.INTEGER
    }
  });
};
