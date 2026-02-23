// NOTE:
// 6.4.0 で利用したものを使います

const express = require('express');
const app = express();
// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// GET /users
// クエリパラメータ offset / limit を使って、ユーザー配列を部分取得して返す。
app.get('/users', (req, res) => {
    // クエリパラメータからoffsetとlimitを取得
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || users.length;
    // ユーザーのリストを切り取って返す
    const slicedUsers = users.slice(offset, offset + limit);

    // テンプレートuser.ejsを使ってHTMLを生成して返す
    res.render('users', { users: slicedUsers });
    
});

app.listen(3000, () => {
    // サーバー起動完了ログ
    console.log('Server is running on port 3000');
});