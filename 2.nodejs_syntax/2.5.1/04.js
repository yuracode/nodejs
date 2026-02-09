const a = { a: 'aaa'}
b = a;
console.log(a === b); // true

const c = { ...a };
console.log(c); // { a: 'aaa' }
console.log(a === c); // false

a.a = 'foo';
console.log(a); // { a: 'foo' }
console.log(b); // { a: 'foo' }
console.log(c); // { a: 'aaa' }
