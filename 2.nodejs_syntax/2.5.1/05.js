// 配列aを定義：オブジェクトと文字列を含む
const a = [
    {foo: 'foo1'},
    'foo2',
    {foo: 'foo3'}
];
// 配列bを定義：オブジェクトと文字列を含む
const b = [
    {foo: 'foo4'},
    'foo5',
    {foo: 'foo6'}
];

// スプレッド構文でaとbを結合した配列cを作成
const c = [...a, ...b];
// cの最初の要素のfooプロパティを出力
console.log(c[0].foo); // foo1

// aの最初の要素のfooプロパティを変更
a[0].foo = 'bar1';
// cの最初の要素のfooプロパティを出力：参照なので変更が反映される
console.log(c[0].foo); // bar1

// aの2番目の要素を変更
a[1] = 'bar2';
// cの2番目の要素を出力：プリミティブなので変更が反映されない
console.log(c[1]); // foo2
