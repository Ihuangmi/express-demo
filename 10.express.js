const express = require("express");
const app = express();

// 导入路由模块
const router = require("./11.apiRouter");

app.use(express.urlencoded({ extended: false }));

// 定义 JSONP 接口，为防止冲突，必须在 cors 之前定义
app.get("/api/jsonp", (req, res) => {
  // 定义 jsonp 具体实现过程
  const funcName = req.query.callback;
  const data = { name: "xiaomi", age: 19 };
  const scriptStr = `${funcName}(${JSON.stringify(data)})`;
  res.send(scriptStr);
});

// 配置 cors 中间件解决接口跨域问题
const cors = require("cors");
app.use(cors());

// app.use() 函数的作用，就是用来注册全局中间件
// 注册路由模块，并添加统一的访问前缀 /api
app.use("/api", router);

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
