const express = require("express");
const router = express.Router();

// 登录 -- session 验证
router.post("/login", function (req, res) {
  const { username, password } = req.body;
  // 验证账户密码
  if (username !== "admin" || password !== "123456") {
    return res.send({
      status: 1,
      message: "失败",
    });
  }

  // 将用户登录信息保存到 session，只有成功配置 session 中间件后才有  req.session 对象
  req.session.username = req.body.username;
  req.session.islogin = true;

  res.send({
    status: 0,
    message: "登录成功",
  });
});

router.get("/userinfo", function (req, res) {
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: "fail" });
  }
  res.send({
    status: 0,
    message: "获取用户信息成功",
    username: req.session.username,
  });
});

router.delete("/logout", function (req, res) {
  // 清空 session
  req.session.destroy();
  res.send({
    status: 0,
    message: "退出成功",
  });
});

// 导出路由对象
module.exports = router;
