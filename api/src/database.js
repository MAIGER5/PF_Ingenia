require("dotenv").config();
const { Sequelize } = require("sequelize");


//********************   Nueva base de dato *******************
const functionAssessment = require('./models/Assessment');
const functionCategory = require('./models/Category');
const functionComment = require('./models/Comment');
const functionCourse = require('./models/Course')
const functionBill = require('./models/Buy')
const functionSold = require('./models/Bill');
const functionPublications = require('./models/Publication');
const functionUser =require('./models/User');

const { DB_USER, DB_PASSWORD, DB_HOST, DB } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`,
  {
    logging: false, // establecer en console.log para ver las consultas SQL sin procesar
    native: false, // permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
  }
);

functionAssessment(sequelize);
functionCategory(sequelize);
functionComment(sequelize);
functionCourse(sequelize);
functionBill(sequelize);
functionSold(sequelize);
functionPublications(sequelize);
functionUser(sequelize);


const { Assessment,Category,Comment,Course,Buy,Bill,Publication,User} = sequelize.models;
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

Bill.belongsToMany(Course,{through:"UserBill"});
Course.belongsToMany(Bill,{through:"UserBill"})

module.exports = {
  sequelize,
  ...sequelize.models,
};

