const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Course", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
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
      allowNull: false,
    },
    lenguage: {
      type: DataTypes.ENUM("ES", "EN"),
      allowNull: false,
      defaultValue: "ES",
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    habilities: {
      type: DataTypes.ENUM(
        "HTML",
        "CSS",
        "JS",
        "REACT",
        "NODE",
        "SQL",
        "PYTHON",
        "JAVA"
      ),
      defaultValue: "HTML",
      allowNull: false,
    },
    dificulty: {
      type: DataTypes.ENUM("BASIC", "MEDIUM", "ADVANCED"),
      defaultValue: "MEDIUM",
      allowNull: false,
    },
  });
};
