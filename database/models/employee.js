// import db from "../util/database.js";
import Sequelize from "sequelize";
import db from "../util/database.js";

const Employee = db.sequelize.define(
  "employeelist",
  {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default Employee;
