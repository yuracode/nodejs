// 配列aを定義
const a = [1, 2, 3];
// 配列bを定義
const b = [4, 5, 6];
// 配列aを出力
console.log(a); // [ 1, 2, 3 ]
// 配列bを出力
console.log(b); // [ 4, 5, 6 ]
// スプレッド構文でaとbを結合した配列cを作成
const c =[...a,...b];
// 配列cを出力
console.log(c); // [ 1, 2, 3, 4, 5, 6 ]
