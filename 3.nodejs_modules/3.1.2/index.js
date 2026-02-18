// 同じディレクトリのa.jsファイルをインポート
const a = require('./a'); // a.jsを実行（calc.numを5に変更）
// 同じディレクトリのb.jsファイルをインポート
const b = require('./b'); // b.jsを実行（1秒後にcalc.numを10に変更）

// 同じディレクトリのcalc.jsファイルをインポート：計算関連のモジュール
const calc = require('./calc'); // calcオブジェクトにcalc.jsのエクスポートを代入

// calcモジュールのnumプロパティをコンソールに表示
console.log(calc.num); // 現在のnum値（5）を表示

// 1.5秒後にcalc.numを再度コンソールに表示（モジュールのキャッシュを確認するため）
setTimeout(() => { // 非同期タイマー
  console.log(calc.num); // 10を表示（b.jsの変更後）
},1500); // 1500ミリ秒（1.5秒）後

