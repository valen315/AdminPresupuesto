const {DataTypes } = require("sequelize");
// importing connection database
const sequelize = require('../db');
// import model for FK typeId
const Type = require('./Type');
const User = require('./User');

const Operation = sequelize.define('operation', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue:DataTypes.NOW,
    },
    typeId:{
      type:DataTypes.INTEGER,
      allowNull: false,
      // This is a reference to another model
      references: {
        model: Type,
        key: 'id'
      }
    },
    userId:{
      type:DataTypes.UUID,
      //allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    }

  });

  Operation.belongsTo(Type,
    {foreignKey:'typeId',
    })
  Operation.belongsTo(User,{
    foreignKey: 'userId',
  })
  
  module.exports = Operation