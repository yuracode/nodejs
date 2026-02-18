// 配列を返す関数を定義
function returnArray(){
    return [1, 2, 3];
};

// 関数の戻り値を分割代入：oneに1番目、threeに3番目を代入（2番目はスキップ）
const[one, , three] = returnArray();
// oneを出力：1
console.log(one); // 1
// threeを出力：3
console.log(three); // 3
