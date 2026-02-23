const http = require('http');

// HTTPサーバーを作成
http.createServer((req, res) => {
    // ステータスコードとレスポンスヘッダーを設定
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // レスポンス本文を書き込む
    res.write('Hello World\n');
    // レスポンスを終了する
    res.end();
// 3000番ポートで待ち受けを開始
}).listen(3000);
