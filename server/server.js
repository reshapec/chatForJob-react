// express官网: https://expressjs.com/
// 监听路由和响应内容， 使用nodemon自动重启，安装方法: npm install -g nodemon, 重启方式: nodemon server.js
// express其他特性: app.get、 app.post分别开发get和post接口
//                 app.use使用模块
//                 代res.send、res.json、res.sendfile响应不同的内容

const express = require('express');
const app = express(); // 新建app
const port = 3030;

// The function signature is:
//  express.static(root, [options])
//  The root argument specifies the root directory from which to serve static assets.
app.use(express.static('public'));

// app.METHOD(PATH, HANDLER)
// Where:
//    app is an instance of express.
//    METHOD is an HTTP request method, in lowercase.
//    PATH is a path on the server.
//    HANDLER is the function executed when the route is matched.

// 访问根目录， req请求， res响应
app.get('/', (req, res) => res.send('Hello World!'));

// 访问data， 返回json数据
app.get('/data', (req, res) => {res.json({name: 'chatforjob', type: 'IT' })});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));