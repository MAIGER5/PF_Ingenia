require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`,
  {
    logging: false, // establecer en console.log para ver las consultas SQL sin procesar
    native: false, // permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
  }
);

// const basename = path.basename(__filename);

// const modelDefiners = [];

// fs.readdirSync(path.join(__dirname, "/models"))
//   .filter(
//     (file) =>
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//   )
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, "/models", file)));
//   });

// modelDefiners.forEach((model) => model(sequelize));

// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [
//   entry[0][0].toUpperCase() + entry[0].slice(1),
//   entry[1],
// ]);
// sequelize.models = Object.fromEntries(capsEntries);

// const {
//   Assessment,
//   Category,
//   Comment,
//   Course,
//   Data,
//   Instructors,
//   Publications,
//   User,
// } = sequelize.models;
// // RELACION DE TABALS AQUÍ ABAJO

// Course.hasMany(Instructors);
// Instructors.belongsTo(Course);

// Course.belongsToMany(Category, { through: "CourseCategory" });
// Category.belongsToMany(Course, { through: "CourseCategory" });

// Course.belongsTo(Assessment);
// Assessment.hasMany(Course);

// User.belongsTo(Assessment);
// Assessment.hasMany(User);

// Course.belongsTo(Comment);
// Comment.hasMany(Course);

// User.belongsTo(Comment);
// Comment.hasMany(User);

// Instructors.hasOne(Data);
// Data.hasOne(Instructors);

// Instructors.belongsTo(Publications);
// Publications.hasMany(Instructors);

// Instructors.belongsTo(Comment);
// Comment.hasMany(Instructors);

// User.hasOne(Data);
// Data.hasOne(User);

// Course.belongsToMany(User, { through: "CourseUser" });
// User.belongsToMany(Course, { through: "CourseUser" });

module.exports = {
  ...sequelize.models,
  sequelize,
};
