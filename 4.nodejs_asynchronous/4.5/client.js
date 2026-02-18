// httpモジュールをインポート：HTTPサーバーとクライアントを作成するためのモジュール
const http = require('http');

// localhostのポート3000にHTTP GETリクエストを送信
const req = http.request('http://localhost:3000', (res) => {
    // レスポンスのエンコーディングをutf8に設定
    res.setEncoding('utf8');

    // 'data'イベントリスナー：レスポンスからチャンクが受信されるたびに実行
    res.on('data', (chunk) => {
        // 受信したチャンクをコンソールに表示
        console.log('Response chunk:', chunk);
    });

    // 'end'イベントリスナー：レスポンスが終了したときに実行
    res.on('end', () => {
        // レスポンス終了をコンソールに表示
        console.log('Response ended');
    });
});

// リクエストを終了（送信）
req.end();
