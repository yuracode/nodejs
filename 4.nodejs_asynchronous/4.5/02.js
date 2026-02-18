// httpモジュールをインポート：HTTPサーバーとクライアントを作成するためのモジュール
const http = require('http');

// HTTPサーバーを作成：すべてのリクエストに対して'hello world'をレスポンスとして返す
http.createServer((req, res) => {
    // レスポンスに'hello world'と改行を書き込み
    res.write('hello world\n');
    // レスポンスを終了
    res.end();
}).listen(3000); // ポート3000でリッスン

// サーバーが起動したことをコンソールに表示
console.log('Server running at http://localhost:3000/');
