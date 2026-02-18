// obj1オブジェクトを定義：ネストされたオブジェクトを含む
const obj1 = {
    a: 'aaa',
    b: {
        foo: 'bbb'
    }
};

// obj2オブジェクトを定義：ネストされたオブジェクトを含む
const obj2 = {
    c: {
        foo: 'ccc'
    }
};

// スプレッド構文でobj1とobj2を結合したobj3を作成
const obj3 = {
    ...obj1,
    ...obj2
};

// obj1のネストされたプロパティを変更
obj1.b.foo = 'bbb-update';
// obj3の対応するプロパティを出力：浅いコピーなので変更が反映される
console.log(obj3.b.foo); // bbb-update

// obj1のトップレベルプロパティを変更
obj1.a = 'aaa-update';
// obj3の対応するプロパティを出力：プリミティブなので変更が反映されない
console.log(obj3.a); // aaa