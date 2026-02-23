const express = require('express');
const app = express();

// リクエスト情報を出力するミドルウェア
const logMiddleware = (req, res, next) => {
    // HTTPメソッドとURLを表示
    console.log(req.method, req.url);
    // 次の処理（ルートハンドラ）へ進む
    next();
};

// ルートごとにミドルウェアを適用（/ のみ）
app.get('/', logMiddleware, (req, res) => {
    // ミドルウェア実行後にレスポンスを返す
    res.status(200).send('Hello World\n');
});

// URLパラメータ付きルート（こちらには logMiddleware を適用していない）
app.get('/user/:id', (req, res) => {
    // パスパラメータからidを取得
    const userId = req.params.id;
    res.status(200).send(`User ID: ${userId}\n`);
});

// 3000番ポートでサーバー起動
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
