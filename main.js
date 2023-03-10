const express = require("express");
const app = express();

// 导入路由模块
const router = require("./router");

// app.use() 函数的作用，就是用来注册全局中间件
// 注册路由模块，并添加统一的访问前缀 /api
app.use("/api", router);

// /**
//  * 监听GET请求
//  * 参数1: 客户端请求的URL地址
//  * 参数2: 请求对应的处理函数
//  */
// app.get("/", function (req, res) {
//   // 请求参数对象
//   console.log(req.query); // {}
//   res.send(req.query);
// });

// // :id 为动态参数，可以有多个动态参数
// app.get("/user/:id", function (req, res) {
//   // req.params 是匹配到的动态参数
//   console.log(req.params); // { id: '999' }
//   res.send(req.params);
// });

// //  POST 请求
// app.post("/user", function (req, res) {
//   console.log(req.query);
//   // 调用 express 提供的 res.send() 方法 向客户端响应一个 JSON 对象
//   res.send({ name: "达瓦", age: 18 });
// });

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
