require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const db = require("./models"); // Sequelize 인스턴스를 가져옵니다.

const app = express();

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// 세션 설정
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// 기본 라우터 설정
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 데이터베이스 연결 및 테이블 동기화
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// 서버 시작
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
