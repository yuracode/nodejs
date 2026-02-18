// fsモジュールからreadFile関数をインポート
const {readFile} = require('fs');

// 現在のファイルをUTF-8で読み込む
readFile(__filename, 'utf8', (err, data) => {
    if(err) {
        // エラーが発生したらエラーメッセージをコンソールに表示
        console.error('Error reading file:', err);
        return;
    }
    // 読み込んだファイルの内容をコンソールに表示
    console.log('File contents:', data);
});