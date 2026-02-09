const obj1 = {
    a: 'aaa',
    b: 'bbb'
};
console.log(obj1);

const obj2 = {
    c: 'ccc'
};
console.log(obj2);

const obj3 = {
    ...obj1, 
    ...obj2
};
console.log(obj3); // { a: 'aaa', b: 'bbb', c: 'ccc' }