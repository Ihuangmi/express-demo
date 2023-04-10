const express = require("express");
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

// 导入路由模块
const router = require("./01.router");

// app.use() 函数的作用，就是用来注册全局中间件
// 注册路由模块，并添加统一的访问前缀 /api
app.use("/api", router);


// 代理/api请求到http://www.example.org
// app.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'http://test.main.newrank.cn',
//     changeOrigin: true,
//   })
// );

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
