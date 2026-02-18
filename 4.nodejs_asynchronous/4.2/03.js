// fsモジュールをインポート：ファイルシステム操作を行うためのモジュール
const fs = require('fs');

// 0から99までのループ：100回ファイル書き込みを試みる
for(let i = 0; i < 100; i++) {
    // 書き込むテキストを生成：'write: i'の形式
    const text = `write: ${i}`;
    // data.textファイルにテキストを非同期で書き込み
    fs.writeFile('./data.text',text,(err) => {
        // エラーが発生した場合、エラーメッセージを表示して終了
        if(err) {
            console.error('Error writing file:', err);
            return;
        }
        // 書き込み成功時にテキストをコンソールに表示：実行順序がランダムになることを示す
        console.log(text);
    });
}