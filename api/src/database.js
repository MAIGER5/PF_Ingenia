require("dotenv").config();
const { Sequelize } = require("sequelize");


//********************   Nueva base de dato *******************
const functionAssessment = require('./models/Assessment');
const functionCategory = require('./models/Category');
const functionPoint = require('./models/Point')
const functionCourse = require('./models/Course')
const functionBuy = require('./models/Buy')
const functionBill = require('./models/Bill');
const functionPublications = require('./models/Publication');
const functionUser =require('./models/User');

const { DB_USER, DB_PASSWORD, DB_HOST, DB, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB}`,
  {
    logging: false, // establecer en console.log para ver las consultas SQL sin procesar
    native: false, // permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
  }
);

functionAssessment(sequelize);
functionCategory(sequelize);
functionPoint(sequelize);
functionCourse(sequelize);
functionBuy(sequelize);
functionBill(sequelize);
functionPublications(sequelize);
functionUser(sequelize);


const { Assessment,Category,Point,Course,Buy,Bill,Publication,User} = sequelize.models;
// RELACION DE TABALS AQUÍ ABAJO

User.belongsToMany(Course,{through:"UserCourse"});
Course.belongsToMany(User,{through:"UserCourse"})

Course.belongsToMany(Category,{through:"CourseCategory"});
Category.belongsToMany(Course,{through:"CourseCategory"});

User.hasMany(Buy)
Buy.belongsTo(User)

User.hasMany(Publication)
Publication.belongsTo(User)

User.hasMany(Bill)
Bill.belongsTo(User)

Bill.belongsToMany(Course,{through:"CourseBill"});
Course.belongsToMany(Bill,{through:"CourseBill"})

User.hasMany(Assessment)
Assessment.belongsTo(User)

User.hasMany(Point)
Point.belongsTo(User)

Course.hasMany(Point)
Point.belongsTo(Course)

module.exports = {
  sequelize,
  ...sequelize.models,
};

