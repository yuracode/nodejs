const obj = {
    foo: 'hello',
    bar: {
        baz: 'world'
    }
};

console.log(obj.foo); // hello
console.log(obj['foo']); // hello
console.log(obj.bar.baz); // world
console.log(obj['bar']['baz']); // world
