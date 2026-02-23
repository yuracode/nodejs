// NOTE:
// 6.4.0 のユーザーデータ例を再利用する。

const express = require('express');
const app = express();
// テンプレートエンジンに EJS を設定
app.set('view engine', 'ejs');


// URLパス public でも同じ静的ファイルを配信
app.use('/static', express.static('static'));

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// GET /users
// クエリパラメータ offset / limit でユーザー配列を部分取得する。
app.get('/users', (req, res) => {
    // クエリパラメータから offset と limit を取得
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || users.length;
    // 取得範囲で配列を切り出す
    const slicedUsers = users.slice(offset, offset + limit);

    // users.ejs を使って HTML を生成して返す
    res.render('users', { users: slicedUsers });
    
});

app.listen(3000, () => {
    // サーバー起動完了ログ
    console.log('Server is running on port 3000');
});