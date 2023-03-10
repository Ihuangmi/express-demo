const express = require("express");

// 创建路由对象
const router = express.Router();

// 路由级别 中间件注册
router.use(function (req, res, next) {
  console.log("这是中间件函数");

  const time = Date.now();

  // 为 req 对象挂载自定义属性，共享给后面所有路由
  req.startTime = time;

  next();
});

// 挂载路由
router.get("/", function (req, res) {
  res.send("come on" + req.startTime);
});

router.get("/user", function (req, res) {
  res.send("user details");
});

router.post("/", function (req, res) {
  res.send("hello");
});

// 导出路由对象
module.exports = router;
