const calc = require('./01.js');

// exportsされたnum, add, subを使用する
console.log(calc.num);
let res = calc.add(3, 1);
console.log(res);

res = calc.sub(3, 1);
console.log(res);