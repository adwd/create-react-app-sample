const express = require('express');
const app = express();

// ポートの指定
app.set('port', process.env.PORT || 3001);

// html, js, cssの静的ファイル
var clientPath = __dirname.replace("/server", "/build");
app.use('/', express.static(clientPath));

// GET /todos でTODOを返す
app.get('/todos', (req, res, next) => {
  res.json([
    { id: 0, text: 'do something' },
    { id: 1, text: 'learn react'}
  ]);
});

// 指定したポートでリクエスト待機状態にする
app.listen(app.get('port'), () => {
    console.log('server listening on port :' + app.get('port'));
});
