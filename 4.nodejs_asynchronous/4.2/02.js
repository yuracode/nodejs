// fsモジュールからreadFile, writeFile, chmod, read関数をインポート：ファイル操作を行うための関数
const { readFile, writeFile, chmod, read } = require('fs');

// バックアップファイル名を生成：現在のファイル名にタイムスタンプを付加
const backupFile = `${__filename}-${Date.now()}`;

// 自身のファイルを非同期で読み込み
readFile(__filename, 'utf8', (err, data) => {
    // エラーが発生した場合、エラーメッセージを表示して終了
    if(err) {
        return console.error('Error reading file:', err);
    }
    // 読み込んだデータをバックアップファイルに書き込み
    writeFile(backupFile, data, (err) => {
        // エラーが発生した場合、エラーメッセージを表示して終了
        if(err) {
            return console.error('Error writing file:', err);
        }
        // バックアップファイルのパーミッションを読み取り専用（0o400）に変更
        chmod(backupFile, 0o400, (err) => {
            // エラーが発生した場合、エラーメッセージを表示して終了
            if(err) {
                return console.error('Error changing file permissions:', err);
            }
            // すべての処理が完了したことをコンソールに表示
            console.log('done');
        });

    });
});