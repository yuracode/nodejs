// fsモジュールからreadFile関数をインポート：ファイルを非同期で読み込むための関数
const { readFile } = require('fs');

// 同期的に'A'を出力：プログラムの開始を示す
console.log('A');

// 自身のファイルを非同期で読み込み：コールバック関数で結果を処理
readFile(__filename, 'utf8', (err, data) => {
    // 読み込み完了後に'B'とファイル内容を出力：非同期処理の完了を示す
    console.log('B',data);
});

// 同期的に'C'を出力：readFileが非同期なので、'B'より先に実行される
console.log('C');