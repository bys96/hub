import { Sequelize, Model, ModelCtor } from "sequelize";

export interface Db {
  sequelize: Sequelize; // sequelize를 명시적으로 추가
  [key: string]: Sequelize | ModelCtor<Model<any, any>>; // 인덱스 시그니처
}

export interface ModelStatic extends ModelCtor<Model> {
  initiate(sequelize: Sequelize): void;
  associate?(db: Db): void;
}
