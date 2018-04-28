'use strict';
const fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  config = require('../config/config');
let db = {};
let dbConfig = config[config.env];
const sequelize = new 
Sequelize(dbConfig.database, dbConfig.username,
  dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  } ); 
fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach( (file) => {
  const model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});
Object.keys(db).forEach( (modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
// db.Sequelize = Sequelize;
module.exports = db;