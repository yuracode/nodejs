// NOTE: 6.4.0 のユーザーデータ例を再利用

const express = require('express');
const app = express();

// テンプレートエンジンを EJS に設定
app.set('view engine', 'ejs');


// /static パスで static ディレクトリの静的ファイルを配信
app.use('/static', express.static('static'));

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// GET /users: クエリパラメータ offset/limit でユーザー一覧を部分取得
app.get('/users', (req, res) => {
    // クエリパラメータから offset と limit を取得（デフォルト: offset=0, limit=全件）
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || users.length;

    // 指定された範囲でユーザー配列を切り出す
    const slicedUsers = users.slice(offset, offset + limit);

    // users.ejs でレンダリングして返す
    res.render('users', { users: slicedUsers });
    
});

// GET /api/users: クエリパラメータ offset/limit でユーザー一覧を部分取得して JSON で返す
app.get('/api/users', (req, res) => {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || users.length;
    const slicedUsers = users.slice(offset, offset + limit);
    res.json(slicedUsers);
});
app.post('/calculate', (req, res) => {
  const num1 = parseInt(req.body.number1);
  const num2 = parseInt(req.body.number2);
  const result = num1 + num2;
  res.json({ result });
});
// サーバーをポート 3000 で起動
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});