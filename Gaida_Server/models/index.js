const fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  config = require('../config/config').DB_CONFIG;

let db = {};
const sequelize = new 
Sequelize(config.database, config.username,
  config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  } 
);

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;