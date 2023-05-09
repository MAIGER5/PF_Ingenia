const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Data", {
    idData: {
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
    correo:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password:{ 
        type:DataTypes.STRING,
        validate: {
            is: /^[0-9a-f]{64}$/i
          },
        allowNull:false,
    },
    imgProfile:{
        type:DataTypes.STRING,
        isUrl: true,
        allowNull: false,
    }
  },{
    timestamps:false,
});
};
