const Sequelize = require("sequelize");
console.log("env", process.env.REACT_APP_DATABASE_URL);
const db = new Sequelize(process.env.REACT_APP_DATABASE_URL, {
  logging: false,
});

module.exports = db;
