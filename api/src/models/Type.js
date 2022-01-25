const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Type=sequelize.define('type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports =Type