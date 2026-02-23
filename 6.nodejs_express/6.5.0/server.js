const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // EJSをテンプレートエンジンとして設定

// GET / にアクセスしたときのレスポンス
app.get('/', (req, res) => {
    // EJSテンプレートをレンダリングしてレスポンスを返す
    res.render('index', { message: 'Hello World' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});