// 引数として使用する配列を定義
const args = [1, 2, 3];

// 3つの引数を加算する関数を定義
function add(x, y, z){
    return x + y + z;
}

// スプレッド構文でargsを展開してadd関数に渡す
const total = add(...args);
// totalを出力：6
console.log(total); // 6
