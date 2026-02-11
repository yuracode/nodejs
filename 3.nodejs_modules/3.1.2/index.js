const a = require('./a');
const b = require('./b');

const calc = require('./calc');

console.log(calc.num);

setTimeout(() => {
  console.log(calc.num);
},1500);

