const a = [1, 2, 3];
const b = [4, 5, 6];
console.log(a); // [ 1, 2, 3 ]
console.log(b); // [ 4, 5, 6 ]
const c =[...a,...b];
console.log(c); // [ 1, 2, 3, 4, 5, 6 ]
