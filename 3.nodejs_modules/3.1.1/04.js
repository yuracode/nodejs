// 同じディレクトリの03.jsファイルをインポート：計算関数を提供するモジュール
const calc = require('./03.js'); // calcオブジェクトに03.jsのエクスポートを代入

// exportsされたnumプロパティをコンソールに表示
console.log(calc.num); // numの値（1）を表示
// add関数を使って3+1を計算し、結果をコンソールに表示
let res = calc.add(3, 1); // resに4を代入
console.log(res); // 4を表示

// sub関数を使って3-1を計算し、結果をコンソールに表示
res = calc.sub(3, 1); // resに2を代入
console.log(res); // 2を表示