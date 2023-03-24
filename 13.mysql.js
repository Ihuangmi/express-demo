const mysql = require("mysql");

// 1、创建连接
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "960827",
  database: "my_db_01", // 数据库名称
});

// 2、连接数据库
connection.connect();

// 3、查询数据
connection.query("SELECT * FROM users", (error, results, fields) => {
  if (error) throw error;
  // 如果执行查询语句，得到的结果是数组
  console.log(results);
});

// 4、插入数据
// const user = {
//   username: "jd",
//   password: "256556625",
// };
// // 待执行的 SQL 语句，其中 ? 表示占位符
// const sqlStr = "insert into users (username, password) values (?, ?)";
// // 使用数组形式依次为 ? 指定具体值
// connection.query(
//   sqlStr,
//   [user.username, user.password],
//   (error, results, fields) => {
//     if (error) throw error;
//     if (results.affectedRows === 1) {
//       console.log("操作成功", results);
//     }
//   }
// );

// 5、更新数据
// const sqlStr = "update users set password='000000' where id=9";
// connection.query(sqlStr, (error, results, fields) => {
//   if (error) throw error;
//   if (results.affectedRows === 1) {
//     console.log("操作成功", results);
//   }
// });

// 6、删除数据
// const sqlStr = "delete from users where id=9";
// connection.query(sqlStr, (error, results, fields) => {
//   if (error) throw error;
//   if (results.affectedRows === 1) {
//     console.log("操作成功", results);
//   }
// });

// 关闭连接
connection.end();

/**
 * -- 通过 * 把 users 表所有数据查询出来
-- select * from users
-- select * from users where id='1'

-- 查询 users 表中的 username, password 列数据
-- select username, password from users

-- 插入数据
-- insert into users (username, password) values ('tony2', '546812')

-- 更新数据
-- update users set password='000000' where id=4
-- update users set password='000001',status=1 where id=4

-- 删除数据
-- delete from users where id=4
 */
