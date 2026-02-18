// obj1オブジェクトを定義：aとbプロパティを持つ
const obj1 = {
    a: 'aaa',
    b: 'bbb'
};
// obj1を出力
console.log(obj1);

// obj2オブジェクトを定義：cプロパティを持つ
const obj2 = {
    c: 'ccc'
};
// obj2を出力
console.log(obj2);

// スプレッド構文でobj1とobj2を結合したobj3を作成
const obj3 = {
    ...obj1, 
    ...obj2
};
// obj3を出力：{ a: 'aaa', b: 'bbb', c: 'ccc' }
console.log(obj3); // { a: 'aaa', b: 'bbb', c: 'ccc' }