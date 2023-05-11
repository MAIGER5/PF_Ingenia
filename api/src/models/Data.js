//Hay que instalar esta libreria.
// const bcrypt = require('bcrypt');

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Data",
    {
      idData: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          is: /^[0-9a-f]{64}$/i,
        },
        allowNull: false,
      },

      //Esta es una librería que se encarga de validar las contraseñas, no afectara el modelo ya que no se sube a la base de datos
      // },
      // {
      //   sequelize,
      //   modelName: "Data",
      //   hooks: {
      //     beforeCreate: (data) => {
      //       const salt = bcrypt.genSaltSync();
      //       data.password = bcrypt.hashSync(data.password, salt);
      //     },
      //   },
      imgProfile: {
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
