const obj = {
    a: 10,
    b: 20,
    c: 30
};

const {a: foo, c: bar} = obj;
console.log(foo); // 10
console.log(bar); // 30

