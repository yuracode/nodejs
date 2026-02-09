function add(a, b = 2){
    return a + b;
}

const total = add(1);
console.log(total); // 3

const total1 = add(1, 3);
console.log(total1); // 4
