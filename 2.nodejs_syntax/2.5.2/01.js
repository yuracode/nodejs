const [first, second, ...foo] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(foo); // [ 30, 40, 50 ]

const {a:z, c, ...bar} = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};

console.log(z); // 10
console.log(c); // 20
console.log(bar); // { c: 30, d: 40 }
