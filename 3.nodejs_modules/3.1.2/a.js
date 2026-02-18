// 同じディレクトリのcalc.jsファイルをインポート：計算モジュールを読み込み
const calc = require('./calc'); // calc.jsをインポート

// calcオブジェクトのnumプロパティを5に変更
calc.num = 5 // numプロパティを5に変更

// 変更後のnumプロパティの値をコンソールに表示
console.log(calc.num); // 5を表示
