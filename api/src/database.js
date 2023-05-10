require("dotenv").config();
const { Sequelize } = require("sequelize");


//********************   Nueva base de dato *******************
const functionAssessment = require('./models/Assessment');
const functionCategory = require('./models/Category');
const functionComment = require('./models/Comment');
const functionCourse = require('./models/Course')
const functionData = require('./models/Data')
const functionInstructor = require('./models/Instructor');
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
functionData(sequelize);
functionInstructor(sequelize);
functionPublications(sequelize);
functionUser(sequelize);


const { Assessment,Category,Comment,Course,Data,Instructor,Publications,User} = sequelize.models;
// RELACION DE TABALS AQUÍ ABAJO

Course.hasMany(Instructor);
Instructor.belongsTo(Course);

Course.belongsToMany(Category,{through:"CourseCategory"});
Category.belongsToMany(Course,{through:"CourseCategory"});

Course.belongsTo(Assessment);
Assessment.hasMany(Course);

User.belongsTo(Assessment);
Assessment.hasMany(User);

Course.belongsTo(Comment);
Comment.hasMany(Course);

User.belongsTo(Comment);
Comment.hasMany(User);

Instructor.hasMany(Data)
Data.hasMany(Instructor)

Instructor.belongsTo(Publications)
Publications.hasMany(Instructor)

Instructor.belongsTo(Comment)
Comment.hasMany(Instructor)

User.hasMany(Data)
Data.hasMany(User)

Course.belongsToMany(User,{through:"CourseUser"});
User.belongsToMany(Course,{through:"CourseUser"});

module.exports = {
  sequelize,
  ...sequelize.models
};
