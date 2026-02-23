// Express をインポート
const express = require('express');
const path = require('path');

// Express アプリケーションを作成
const app = express();

// ポート番号を設定
const port = process.env.PORT || 3000;

// テンプレートエンジンに EJS を設定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 必要最小限のミドルウェア
app.use(express.json()); // JSON パース（REST API 用）
app.use(express.urlencoded({ extended: false })); // フォームデータパース
app.use(express.static(path.join(__dirname, 'public'))); // 静的ファイル配信

// GET / - トップページ
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// GET /userManage - ユーザー管理画面
// app.get('/userManage', (req, res) => {
//   res.render('userManage', { title: 'User Management' });
// });

// REST API ルーティング（/users）
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// サーバー起動
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
