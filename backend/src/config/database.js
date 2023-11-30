import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "contact_book", // db name
  "root", // username
  "jpp--278", // password
  {
    host: "localhost",
    dialect: "mysql",
  }
);




