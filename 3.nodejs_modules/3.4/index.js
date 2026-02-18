const fs = require('fs'); // fsモジュールをインポート

fs.readFile(__filename, 'utf8', (err, data) => { // 自身のファイルを非同期で読み込み
    if (err) { // エラーが発生した場合
        console.error('Error reading file:', err); // エラーを表示
        return; // 処理を終了
    }   
    console.log('File contents:', data); // ファイル内容を表示
});

// const {request} = require('undici'); // undiciモジュールからrequestをインポート（コメントアウト）

// request('https://www.yahoo.co.jp/') // Yahooのページにリクエスト（コメントアウト）
//     .then(response => response.body.text()) // レスポンスボディをテキストとして取得
//     .then(body => { // ボディを受け取って
//         console.log('Response body:', body); // 表示
//     });