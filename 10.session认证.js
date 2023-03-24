const express = require("express");
const app = express();

const session = require("express-session");
// 1、配置 session 中间件
app.use(
  session({
    secret: "ithe", // 任意字符串
    resave: false,
    saveUninitialized: true,
  })
);

// 导入路由模块
const router = require("./11.apiRouter");

app.use(express.urlencoded({ extended: false }));

// 注册路由模块，并添加统一的访问前缀 /api
app.use("/api", router);

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
