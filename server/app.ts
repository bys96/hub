import express from "express";
import { Sequelize } from "sequelize";

// Express 앱 생성
const app = express();
const port = 3000;

// Sequelize 인스턴스 생성 (MySQL 연결)
const sequelize = new Sequelize("hub", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// 기본 라우트 설정
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
