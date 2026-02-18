// if文で条件がtrueの場合、ブロック内のコードを実行
if (true){
    // constで変数barを宣言し、5を代入：constはブロックスコープなので、ブロック外からはアクセスできない
    const bar = 5;
}
// 変数barの値をコンソールに表示しようとするが、エラーが発生：barはブロック外で定義されていないため
console.log(bar); // ReferenceError: bar is not defined