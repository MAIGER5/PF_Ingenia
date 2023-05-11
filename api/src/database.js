require("dotenv").config();
const { Sequelize } = require("sequelize");


//********************   Nueva base de dato *******************
const functionAssessment = require('./models/Assessment');
const functionCategory = require('./models/Category');
const functionComment = require('./models/Comment');
const functionCourse = require('./models/Course')
const functionBill = require('./models/Bill')
const functionSold = require('./models/Sold');
const functionPublications = require('./models/Publications');
const functionUser =require('./models/User');

const {DB_USER, DB_PASSWORD, DB_HOST, DB} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`, {
  logging: false, // establecer en console.log para ver las consultas SQL sin procesar
  native: false, // permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
});

functionAssessment(sequelize);
functionCategory(sequelize);
functionComment(sequelize);
functionCourse(sequelize);
functionBill(sequelize);
functionSold(sequelize);
functionPublications(sequelize);
functionUser(sequelize);


const { Assessment,Category,Comment,Course,Bill,Sold,Publications,User} = sequelize.models;
// RELACION DE TABALS AQUÍ ABAJO

User.Course = User.belongsTo(Course);

module.exports = {
  sequelize,
  ...sequelize.models
};

