const express = require("express");
const app = express();

// 生成 JWT 字符串
const jwt = require('jsonwebtoken')
// 将JWT 字符串还原成JSON对象
const expressJWT = require('express-jwt').expressjwt
const secretKey = 'NO1 ^-^'


// const session = require('express-session')
// // 配置 session 中间件
// app.use(session({
//   secret: 'ithe',
//   resave: false,
//   saveUninitialized: true
// }));


// 导入路由模块
const router = require("./11.apiRouter");



app.use(express.urlencoded({ extended: false }));
// app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }));
//使用 app.use() 注册将JWT字符串解析还原成JSON对象的中间件
//.unless() 方法通过正则表达式 指定哪些接口不需要通过权限
//正则中 '\'用来转义 '^'表示指定以什么开头的字符串
app.use(expressJWT({ secret: secretKey, algorithms: ["HS256"], }).unless({ path: [/^\/api\//] }));
//如果出现报错 尝试在 secret: secretKey的后面加上 ", algorithms: ['HS256'] "


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




// 登录 -- jwt 验证
app.post("/login", function (req, res) {
  const { username, password } = req.body
  // 验证账户密码
  if (username !== 'admin' || password !== '123456') {
    return res.send({
      status: 1,
      message: "失败",
    });
  }

  // 将用户登录信息保存到 
  const tokenStr = jwt.sign({ username: username }, secretKey, { expiresIn: '30s' })

  res.send({
    status: 0,
    message: "登录成功",
    token: tokenStr
  });
});


//有权限的接口
app.get('/getinfo', (req, res) => {
  //使用 req.user 获取用户信息 并使用data属性将用户信息发送给客户端
  console.log(req.user);
  res.send({
    status: 200,
    message: '获取用户信息成功!',
    data: req.user //要发送给客户端的信息
  })
})


// app.use() 函数的作用，就是用来注册全局中间件
// 注册路由模块，并添加统一的访问前缀 /api
app.use("/api", router);

app.listen(80, () => {
  console.log("server running at http://127.0.0.1");
});
