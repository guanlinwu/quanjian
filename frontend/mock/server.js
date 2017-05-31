let express = require('express'),
    path    = require('path');
let app = express();
let mockJson = require('./mockJson');

// app.use(require('connect-history-api-fallback')({
//   verbose: true
// }));
//允许跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  console.log(req.method);
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

// 构造请求
for (let key in mockJson) {
  if (mockJson.hasOwnProperty(key)) {
    let element = mockJson[key],
       method = element.method,
       url = element.url,
       data = element.data;

    app[method](url, (req, res) => {
      res.send(JSON.stringify(data));
    });
  }
}

let server = app.listen(5000, function () {
  let port = server.address().port;
  console.log('Open http://localhost:%s', port);
});
