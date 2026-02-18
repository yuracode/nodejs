// utilモジュールからpromisify関数をインポート：コールバックベースの関数をPromiseベースに変換
const { promisify } = require('util');
// fsモジュールからreadFile, writeFile, chmod関数をインポート
const { readFile, writeFile, chmod } = require('fs');

// promisifyを使ってfsの関数をPromiseベースに変換
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const chmodAsync = promisify(chmod);
// バックアップファイル名を作成（現在のファイル名にタイムスタンプを付ける）
const backupFile = `${__filename}-${Date.now()}`;

// 現在のファイルを非同期で読み込む
readFileAsync(__filename, 'utf8')
    .then((data) => {
        // 読み込んだデータをバックアップファイルに書き込む
        return writeFileAsync(backupFile, data);    
    })
    .then(() => {
        // バックアップファイルを読み取り専用に変更
        return chmodAsync(backupFile, 0o444);
    })
    .then(() => {
        // 成功メッセージをコンソールに表示
        console.log('File backup and permission change successful');
    })
    .catch((err) => {
        // エラーが発生したらエラーメッセージをコンソールに表示
        console.error('Error:', err);
    });
