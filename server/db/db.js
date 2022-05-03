const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.REACT_APP_DATABASE_URL || "postgres://localhost:5432/messenger",
  {
    logging: false,
  }
);

module.exports = db;
