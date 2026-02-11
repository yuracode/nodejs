const calc = require('./calc');

setTimeout(() => {
  calc.num = 10;
}, 1000);

console.log(calc.num);
