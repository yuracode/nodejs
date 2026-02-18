// fs/promisesモジュールからreadFile, writeFile, chmod関数をインポート
const {readFile,writeFile,chmod} = require('fs/promises');

// バックアップファイル名を作成（現在のファイル名にタイムスタンプを付ける）
const backupFile = `${__filename}-${Date.now()}`;

// 現在のファイルを非同期で読み込む
readFile(__filename, 'utf8')
    .then((data) => {
        // 読み込んだデータをバックアップファイルに書き込む
        return writeFile(backupFile, data);
    })
    .then(() => {
        // バックアップファイルを読み取り専用に変更
        return chmod(backupFile, 0o444);
    })
    .then(() => {
        // 成功メッセージをコンソールに表示
        console.log('File backup and permission change successful');
    })
    .catch((err) => {
        // エラーが発生したらエラーメッセージをコンソールに表示
        console.error('Error:', err);
    });
