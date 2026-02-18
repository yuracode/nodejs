// 配列aを定義
const a = [1, 2, 3];
// aに4,5,6を追加
a.push(4,5,6);
// cにaを代入（参照渡し）
const c = a;
// cを出力：変更されたaの内容が表示される
console.log(c); // [ 1, 2, 3, 4, 5, 6 ]

// obj1オブジェクトを定義
const obj1 = {
    a: 'aaa', 
    b: 'bbb'
};

// obj1にcプロパティを追加
obj1.c = 'ccc';
// obj1を出力
console.log(obj1);