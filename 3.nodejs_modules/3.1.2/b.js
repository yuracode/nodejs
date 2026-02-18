// 同じディレクトリのcalc.jsファイルをインポート：計算関連のモジュール
const calc = require('./calc'); // calcオブジェクトにcalc.jsのエクスポートを代入

// 1秒後にcalcモジュールのnumプロパティを10に変更
setTimeout(() => { // 非同期タイマー設定
  calc.num = 10; // numを10に変更
}, 1000); // 1000ミリ秒（1秒）後

// 現在のcalc.numの値をコンソールに表示（変更前）
console.log(calc.num); // 現在のnum値（おそらく1）を表示
