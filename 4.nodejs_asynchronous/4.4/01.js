// fs/promisesモジュールからreadFile, writeFile, chmod関数をインポート
const {readFile, writeFile, chmod} = require('fs/promises');

// メインの非同期関数
const main = async () => {
    // バックアップファイル名を作成（現在のファイル名にタイムスタンプを付ける）
    const backupFile = `${__filename}-${Date.now()}`;

    // 現在のファイルをUTF-8で読み込む
    const data = await readFile(__filename, 'utf8');
    // バックアップファイルにデータを書き込む
    await writeFile(backupFile, data);
    // バックアップファイルを読み取り専用に変更
    await chmod(backupFile, 0o444);

    // 成功メッセージを返す
    return 'File backup and permission change successful';
};

// main関数を実行
main()
    .then((message) => {
        // 成功時のメッセージをコンソールに出力
        console.log(message);   
    })
    .catch((err) => {
        // エラー発生時のエラーメッセージをコンソールに出力
        console.error('Error:', err);
    });