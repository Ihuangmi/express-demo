const express = require("express");
const app = express();

/**
 * 客户端发起任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件
 */

// 1、定义一个中间件函数
const mw = function (req, res, next) {
  console.log("这是一个简单的中间件函数");

  // 把流转关系交给下一个中间件或路由
  next();
};

// 2、将 mw 注册为全局生效的中间件
app.use(mw);

// 简化中间件注册
app.use(function (req, res, next) {
  console.log("这是中间件函数");

  const time = Date.now();

  // 为 req 对象挂载自定义属性，共享给后面所有路由
  req.startTime = time;

  next();
});

app.get("/", (req, res) => {
  console.log("调用了 / 路由");
  res.send("home page " + req.startTime);
});

app.get("/user", (req, res) => {
  console.log("调用了 /user 路由");
  res.send("user page " + req.startTime);
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
