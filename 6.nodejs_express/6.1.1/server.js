const express = require('express');
const app = express();

// GET / へのリクエストに応答
app.get('/', (req, res) => {
    // ステータス200でメッセージを返す
    res.status(200).send('Hello World\n');
});

// URLパラメータ付きのルート（例: /user/123）
app.get('/user/:id', (req, res) => {
    // パスパラメータからidを取得
    const userId = req.params.id;
    // 取得したIDをレスポンスとして返す
    res.status(200).send(`User ID: ${userId}\n`);
});

// 3000番ポートでサーバーを起動
app.listen(3000, () => {
    // 起動完了時にコンソールへ表示
    console.log('Server is running on port 3000');
});
