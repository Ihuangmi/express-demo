const qs = require("querystring");

function bodParser(req, res, next) {
  console.log("这是中间件函数");

  let str = "";
  req.on("data", (chunk) => {
    str += chunk;
  });

  req.on("end", () => {
    // console.log(str);
    // TUDO: 把字符串格式的请求体数据解析成对象格式
    const body = qs.parse(str);
    console.log(body);
    req.body = body;
    next();
  });
}

module.exports = bodParser;
