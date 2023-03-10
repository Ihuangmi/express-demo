const express = require("express");
const app = express();

/**
 * 局部生效的中间件
 * 连续调用多个中间件时，中间件共享req和res对象
 */

// 1、定义中间件函数
const mw1 = function (req, res, next) {
  console.log("中间件函数11");
  req.name = "xiaomi";

  next();
};

const mw2 = function (req, res, next) {
  console.log("中间件函数2222");
  console.log(req.name);

  req.age = 18;

  next();
};

// 2、路由调用 mw 中间件
app.get("/", mw1, (req, res) => {
  res.send("home page ");
});

// 调用多个中间件，也可以用一个数组来调用多个中间件 [mw1, mw2]
app.get("/user", mw1, mw2, (req, res) => {
  res.send("user page " + req.name + req.age);
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
