// undiciモジュールからrequest関数をインポート：HTTPリクエストを行うための関数
const {request} = require('undici');

// Yahoo JapanのURLにHTTP GETリクエストを送信
request('https://www.yahoo.co.jp/')
    .then(response => response.body.text()) // レスポンスボディをテキストとして取得
    .then(body => {
        // 取得したレスポンスボディをコンソールに表示
        console.log('Response body:', body);
    });