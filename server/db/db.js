const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DATABASE_URL || process.env.REACT_APP_DATABASE_URL,
  {
    logging: false,
  }
);

module.exports = db;
