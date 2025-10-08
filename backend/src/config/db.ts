import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("nysc_db", "postgres", "olawale", {
  host: "localhost",
  dialect: "postgres",
});
