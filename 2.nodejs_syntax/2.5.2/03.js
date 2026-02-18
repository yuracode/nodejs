// objオブジェクトを定義
const obj = {
    a: 10,
    b: 20,
    c: 30
};

// オブジェクトの分割代入：aをfooに、cをbarにリネームして代入
const {a: foo, c: bar} = obj;
// fooを出力：10
console.log(foo); // 10
// barを出力：30
console.log(bar); // 30

