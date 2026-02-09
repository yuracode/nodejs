const a = [1, 2, 3];
a.push(4,5,6);
const c = a;
console.log(c); // [ 1, 2, 3, 4, 5, 6 ]

const obj1 = {
    a: 'aaa', 
    b: 'bbb'
};

obj1.c = 'ccc';
console.log(obj1);