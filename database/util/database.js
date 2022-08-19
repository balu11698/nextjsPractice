import databaseConfig from "../config/dbConfig.js";
import Sequelize from "sequelize";

const sequelizeInstance = new Sequelize(
  databaseConfig.DB,
  databaseConfig.USER,
  databaseConfig.PASSWORD,
  {
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,
    operatorsAliases: 0,
    define: {
      freezeTableName: true,
    },
    logging: false,
    pool: {
      max: databaseConfig.pool.max,
      min: databaseConfig.pool.min,
      acquire: databaseConfig.pool.acquire,
      idle: databaseConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelizeInstance;

db.sequelize.sync().then(() => {
  console.log("#droped the database and and re-synced.");
});

export default db;
// module.exports = db;

// const pool = mysql.createPool(dbConfig);

// export default pool.promise();
