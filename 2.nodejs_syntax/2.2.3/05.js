let obj = { foo: 'hello'};
console.log(obj.foo); // hello

obj = null;
console.log(obj.foo); // TypeError: Cannot read property 'foo' of null
