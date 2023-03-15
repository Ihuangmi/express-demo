const express = require("express");
const router = express.Router();


// 路由级别 中间件注册
router.use(function (req, res, next) {
  console.log("这是中间件函数");
  next();
});




// 挂载路由
router.get("/", function (req, res) {
  res.send({
    status: 0,
    message: "请求成功",
    data: '你好',
  });
});

// // 登录 -- session 验证
// router.post("/login", function (req, res) {
//   const { username, password } = req.body
//   // 验证账户密码
//   if (username !== 'admin' || password !== '123456') {
//     return res.send({
//       status: 1,
//       message: "失败",
//     });
//   }

//   // 将用户登录信息保存到 session   
//   req.session.user = req.body
//   req.session.islogin = true

//   res.send({
//     status: 0,
//     message: "登录成功",
//     data: req.body
//   });
// });




router.delete("/logout", function (req, res) {
  // 清空 session
  req.session.destroy()
  res.send({
    status: 0,
    message: "操作成功",
  });
});

// 导出路由对象
module.exports = router;
