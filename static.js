const express = require("express");
const app = express();

// express.static() 方法可以托管静态资源目录
// 通过 http://127.0.0.1:8080/index.html 可访问 public 文件夹下的资源
// app.use(express.static("public"));

// 挂载路径前缀
// 通过 http://127.0.0.1:8080/public/index.html 访问
app.use("/public", express.static("public"));

app.listen(8080, () => {
  console.log("server running at http://127.0.0.1:8080");
});
