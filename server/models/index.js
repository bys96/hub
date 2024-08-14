const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델 불러오기
db.User = require("./user")(sequelize, DataTypes);
db.Project = require("./project")(sequelize, DataTypes);

// 모델 간 관계 설정
db.Project.associate(db);

module.exports = db;
