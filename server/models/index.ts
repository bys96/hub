import { Sequelize } from "sequelize";
import * as fs from "fs";
import * as path from "path";
import { SequelizeConfig } from "../config/config"; // config 타입 정의 파일이 필요합니다
import { ModelStatic, Db } from "./types"; // 필요한 타입 정의 파일

const env = process.env.NODE_ENV || "development";
const config: SequelizeConfig = require("../config/config")[env];

const db: Db = {
  sequelize: new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  ),
};

const basename = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file) => {
    const model: ModelStatic = require(path.join(__dirname, file)).default;
    console.log(file, model.name);
    db[model.name] = model;
    model.initiate(db.sequelize);
  });

Object.keys(db).forEach((modelName) => {
  const model = db[modelName] as ModelStatic; // 타입 단언을 통해 ModelStatic으로 간주
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
