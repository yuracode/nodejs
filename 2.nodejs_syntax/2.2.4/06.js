const obj = {
    foo: 'hello'
};
Object.freeze(obj);
console.log(obj.foo); // hello
obj.foo = 'good bye'; // 無視される
console.log(obj.foo); // hello

console.log(typeof obj); // object
const value = JSON.stringify(obj);
console.log(typeof value); // string
console.log(value); // {"foo":"hello"}
