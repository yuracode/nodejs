// 配列aを定義
const a = [1, 2, 3];
// 配列aを出力
console.log(a); // [ 1, 2, 3 ]

// Array.prototypeにshowLengthメソッドを追加
Array.prototype.showLength = function() {
    // 配列の長さを出力
    console.log(this.length);
}

// aの長さを出力
a.showLength(); // 3
