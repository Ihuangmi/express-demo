const express = require("express");
const app = express();
const bodParser = require("./09.custom-body-parser");

// 自定义一个解析表单的中间件
app.use(bodParser);

app.get("/", (req, res) => {
  res.send("home page ");
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
