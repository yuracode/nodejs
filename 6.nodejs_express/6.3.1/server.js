const e = require('express');
const express = require('express');
const app = express();

// GET / にアクセスしたときのレスポンス
app.get('/', (req, res) => {
    // ステータス200で文字列を返す
    res.status(200).send('Hello World');
});

// URLパラメータ付きルート（例: /user/123）
app.get('/user/:id', (req, res) => {
    // パスパラメータからidを取得
    const userId = req.params.id;
    // ユーザーIDをレスポンスとして返す
    res.status(200).send(id);
});

// 故意にエラーを発生させるルート
app.get('/error', (req, res)  => {
    // 故意にエラーを発生させる
    throw new Error('This is a test error');
    // このコードは実行されない
    console.log('This will not be executed');
    res.status(200).send('This will not be sent');
});

// エラー処理用ミドルウェア（第1引数が err）
app.use((err, req, res, next) => {
    // エラーの詳細をサーバーログへ出力
    console.error(err.stack);
    // クライアントへ500エラーを返す
    res.status(500).send('Something broke!');
});



// 3000番ポートでサーバー起動
app.listen(3000, () => {
    // 起動完了メッセージ
    console.log('Server is running on port 3000');
});
