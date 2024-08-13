interface SequelizeConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: "mysql" | "sqlite" | "postgres" | "mariadb" | "mssql";
}

const config: { [key: string]: SequelizeConfig } = {
  development: {
    username: "root",
    password: "password",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "password",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

export { SequelizeConfig };
export default config;
