//import model and sequelize
var Operation = require('../models/Operation');
var Type = require('../models/Type');
var sequelize = require('../db');

sequelize.sync();

// 1. create operation
const addOperation = async (req, res) => {
    try {
      let info = {
        concept:req.body.concept,
        amount:req.body.amount,
        typeId:req.body.typeId,
      }
      const data = await Operation.create(info)
      res.status(200).send(data)
      res.json({ message: 'New operation added' });
    } catch (error) {
      console.log(error);
      next();
    }
  } 
  // 2. get all operation
const getAllOperation = async (req, res) => {
    try {
      const data = await Operation.findAll({
        include:[ Type ]
      })
      res.status(200).send(data)
      //res.json(data)
    } catch (error) {
      console.log(error);
      next();
    }
  }


  module.exports={
    addOperation,
    getAllOperation,
  };
  