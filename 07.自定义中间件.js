const express = require("express");
const app = express();
const qs = require("querystring");

// 自定义一个解析表单数据的中间件
app.use(function (req, res, next) {
  console.log("这是中间件函数");

  let str = "";
  req.on("data", (chunk) => {
    str += chunk;
  });

  req.on("end", () => {
    // console.log(str);
    // 把字符串格式的请求体数据解析成对象格式
    const body = qs.parse(str);
    console.log(body);
    req.body = body;
    next();
  });
});

app.get("/", (req, res) => {
  res.send("home page ");
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
