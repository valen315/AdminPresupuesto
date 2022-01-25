require('dotenv').config();
const { Sequelize } = require('sequelize');

const {DB_USER, DB_PASSWORD,DB_NAME,DB_HOST} = process.env;

const sequelize = new Sequelize(
  DB_NAME,//name of the database
  DB_USER, //user
  DB_PASSWORD, //password
  {
    host: DB_HOST,
    dialect: 'mysql',
    //logging: false
  }
);

module.exports = sequelize;