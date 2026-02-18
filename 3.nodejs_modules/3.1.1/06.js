// 同じディレクトリの05.jsファイルをインポート：module.exportsでエクスポートされた'foo'を取得
const calc = require('./05.js'); // 05.jsをインポート：'foo'が返される

// インポートしたcalcの値をコンソールに表示：'foo'が出力される
console.log(calc); // 'foo'を表示