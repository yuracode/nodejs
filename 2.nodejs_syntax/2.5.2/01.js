// 配列の分割代入：firstとsecondに最初の2要素、残りをfooに
const [first, second, ...foo] = [10, 20, 30, 40, 50];
// firstを出力：10
console.log(first); // 10
// secondを出力：20
console.log(second); // 20
// fooを出力：[30, 40, 50]
console.log(foo); // [ 30, 40, 50 ]

// オブジェクトの分割代入：aをzにリネーム、cをそのまま、残りをbarに
const {a:z, c, ...bar} = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};

// z（aの値）を出力：10
console.log(z); // 10
// cを出力：30
console.log(c); // 20
// barを出力：{ b: 20, d: 40 }
console.log(bar); // { c: 30, d: 40 }
