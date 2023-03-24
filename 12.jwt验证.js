const express = require("express");
const app = express();

// 1、导入 JWT 相关的两个包
// jsonwebtoken 用于生成 JWT 字符串
const jwt = require("jsonwebtoken");
// express-jwt 用于将 JWT 字符串还原成 JSON 对象
const expressJWT = require("express-jwt").expressjwt;

// 2、定义 secret 秘钥
const secretKey = "smswjwd NO1 ^-^";

/**
 * 4、注册解析 token 的中间件，配置成功后可以把用户信息挂载到 req.auth 属性上
 * @see https://github.com/auth0/express-jwt#readme
 *
 * .unless() 方法通过正则表达式 指定哪些接口不需要通过权限
 *  正则中 '\'用来转义 '^'表示指定以什么开头的字符串
 */
app.use(
  expressJWT({ secret: secretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//],
  })
);

app.use(express.urlencoded({ extended: false }));

// 登录
app.post("/api/login", function (req, res) {
  console.log("请求了/login接口");
  const { username, password } = req.body;
  // 验证账户密码
  if (username !== "admin" || password !== "123456") {
    return res.send({
      status: 1,
      message: "失败",
    });
  }

  // 3、调用 jwt.sign() 生成 JWT 字符串，三个参数分别是：用户信息对象，加密密钥，配置对象
  const tokenStr = jwt.sign({ username: username }, secretKey, {
    expiresIn: "3000s",
  });

  res.send({
    status: 0,
    message: "登录成功",
    token: tokenStr,
  });
});

// 有权限的接口
app.get("/admin/getinfo", (req, res) => {
  // 5、使用 req.user 获取用户信息
  console.log(req.auth);
  res.send({
    status: 200,
    message: "获取用户信息成功!",
    data: req.auth, //要发送给客户端的信息
  });
});

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
