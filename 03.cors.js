const express = require("express");
const app = express();

/**
 * https://www.ruanyifeng.com/blog/2016/04/cors.html
 */

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

app.get("/api/get", (req, res) => {
  res.send({
    status: 0,
    msg: "请求成功",
    data: req.query,
  });
});

app.post("/api/post", (req, res) => {
  res.send({
    status: 0,
    msg: "请求成功",
    data: req.query,
  });
});

app.delete("/api/delete", (req, res) => {
  res.send({
    status: 0,
    msg: "请求成功",
  });
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
