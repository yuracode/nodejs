// オブジェクトaを定義
const a = { a: 'aaa'}
// bにaを代入（参照渡し）
b = a;
// aとbが同じ参照かを確認：true
console.log(a === b); // true

// スプレッド構文でaのコピーを作成
const c = { ...a };
// cを出力
console.log(c); // { a: 'aaa' }
// aとcが同じ参照かを確認：false
console.log(a === c); // false

// aのプロパティを変更
a.a = 'foo';
// aを出力：変更された内容
console.log(a); // { a: 'foo' }
// bを出力：aと同じ参照なので変更が反映される
console.log(b); // { a: 'foo' }
// cを出力：コピーなので変更が反映されない
console.log(c); // { a: 'aaa' }
