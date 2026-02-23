const express = require('express');
const app = express();

const logTimeMiddleware = (req, res, next) => {
    // 現在の日時をISO形式で表示
    console.log('Request Time:', new Date().toISOString()); 
    // 次のミドルウェアまたはルートハンドラへ進む
    next();
};
// リクエスト情報を出力する共通ミドルウェア
const logMiddleware = (req, res, next) => {
    // リクエストのメソッドとURLを表示
    console.log(req.method, req.url);
    // 共通ミドルウェアが通過したことを表示
    console.log('共通ミドルウェア');
    // 次のミドルウェアまたはルートハンドラへ進む
    next();
};

// すべてのルートに共通ミドルウェアを適用
app.use(logMiddleware);
// すべてのルートに共通ミドルウェアを適用
// app.use(logTimeMiddleware);

// / ルートでは共通ミドルウェアに加えて、ここでも logMiddleware を実行
app.get('/',  (req, res) => {
    // レスポンス本文を返す
    res.status(200).send('Hello World\n');
});

// URLパラメータ付きルート（app.use により共通ミドルウェアは実行される）
app.get('/user/:id', (req, res) => {
    // パスパラメータからidを取得
    const userId = req.params.id;
    // 取得したIDをレスポンスとして返す
    res.status(200).send(`User ID: ${userId}\n`);
});

// 3000番ポートでサーバー起動
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
