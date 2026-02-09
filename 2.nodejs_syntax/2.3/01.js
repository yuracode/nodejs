const a = [1, 2, 3];
console.log(a); // [ 1, 2, 3 ]

Array.prototype.showLength = function() {
    console.log(this.length);
}

a.showLength(); // 3
