const express = require('express');
const app = express();

app.use(express.static('public'));

const omikuji = ['大吉', '中吉', '小吉', '吉', '末吉', '凶', '大凶'];

app.get('/api/omikuji', (req, res) => {
    const result = omikuji[Math.floor(Math.random() * omikuji.length)];
    res.json({ result });
});

app.listen(3000, () => console.log('http://localhost:3000'));