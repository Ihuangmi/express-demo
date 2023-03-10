const express = require("express");
const router = express.Router();

// 路由级别 中间件注册
router.use(function (req, res, next) {
  console.log("这是中间件函数");
  next();
});

// 挂载路由
router.get("/gets", function (req, res) {
  res.send({
    status: 0,
    message: "请求成功",
    data: req.query,
  });
});

router.post("/posts", function (req, res) {
  res.send({
    status: 0,
    message: "请求成功",
    data: req.body,
  });
});

router.delete("/delete", function (req, res) {
  res.send({
    status: 0,
    message: "操作成功",
  });
});

// 导出路由对象
module.exports = router;
