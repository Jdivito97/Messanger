const Sequelize = require("sequelize");
console.log("env", process.env.REACT_APP_DATABASE_URL);

// Hiding this URL in .env prevents the npm run seed command from working. npm run dev still functions perfectly if URL is hidden as .env variable
const db = new Sequelize(
  process.env.REACT_APP_DATABASE_URL ||
    "postgres://postgres:Monkeytown@localhost:5432/messenger",
  {
    logging: false,
  }
);

module.exports = db;
