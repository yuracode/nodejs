// fsモジュールをインポート：ファイルシステム操作を行うためのモジュール
const fs = require('fs');

// 現在のファイルを読み取りストリームとして作成：エンコーディングはutf8、高水位マークは64バイト
const readStream = fs.createReadStream(__filename, {'encoding': 'utf8', highWaterMark: 64});

// チャンクカウンターを初期化
let counter = 0;

// 'data'イベントリスナー：ストリームからチャンクが読み取られるたびに実行
readStream.on('data', (chunk) => {
    // チャンク番号をインクリメントしてコンソールに表示
    console.log(`Chunk ${++counter}:`, chunk);
});

// 'close'イベントリスナー：ストリームが閉じられたときに実行
readStream.on('close', () => {
    // ストリームが閉じられたことをコンソールに表示
    console.log('Stream closed');
});

// 'error'イベントリスナー：読み取り中にエラーが発生したときに実行
readStream.on('error', (err) => {
    // エラーメッセージをコンソールに表示
    console.error('Error reading file:', err);
});

