const express = require("express");
const app = express();
const parser = require("body-parser");

/**
 * 快速托管静态资源中间件
 */
// app.use(express.static("public"));

/**
 * 解析json格式请求体数据
 */
app.use(express.json());

/**
 * 解析 URL-encoded 格式的请求体数据
 */
// app.use(express.urlencoded({ extended: false }));
// 同：
// app.use(parser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  // 人为抛出一个错误
  throw new Error("服务器内部发生错误！");

  res.send("home page ");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

/**
 * 错误级别中间件，捕获项目的异常错误
 * 注意：错误级别中间件必须注册在所有路由之后，而其他中间件必须在路由之前
 */
app.use(function (err, req, res, next) {
  console.log("发生错误：" + err.message);

  res.send("Error:" + err.message);
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
