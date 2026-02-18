// fsモジュールをインポート
const fs = require('fs');

// 再帰的にファイルを書き込む関数
const writeFile = (i) => {
    // iが100以上になったら終了
    if(i >= 100) {
        return;
    }

    // 書き込むテキストを作成
    const text = `write: ${i}`;
    // data.textファイルにテキストを書き込む
    fs.writeFile('./data.text',text,(err) => {
        if(err) {
            // エラーが発生したらエラーメッセージをコンソールに表示
            console.error('Error writing file:', err);
            return;
        }
        // 書き込んだテキストをコンソールに表示
        console.log(text);
        // 次のiで再帰呼び出し
        writeFile(i + 1);
    });
}

// 書き込みを開始（i=0から）
writeFile(0);