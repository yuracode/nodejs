// fsモジュールからreadFile, writeFile, chmod関数をインポート
const {readFile,writeFile,chmod} = require('fs');

// readFileをPromiseでラップした関数
const readFileAsync = (path) => {
    return new Promise((resolve, reject) => {
        // ファイルをUTF-8で読み込む
        readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};

// writeFileをPromiseでラップした関数
const writeFileAsync = (path, data) => {
    return new Promise((resolve, reject) => {
        // ファイルにデータを書き込む
        writeFile(path, data, (err) => {
            if(err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
};

// chmodをPromiseでラップした関数
const chmodAsync = (path, mode) => {
    return new Promise((resolve, reject) => {
        // ファイルのパーミッションを変更
        chmod(path, mode, (err) => {   
            if(err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
};

// バックアップファイル名を作成（現在のファイル名にタイムスタンプを付ける）
const backupFile = `${__filename}-${Date.now()}`;

// 現在のファイルを非同期で読み込む
readFileAsync(__filename)
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
