// constで変数fooを宣言し、5を代入：constは再代入ができない
const foo = 5;
// 変数fooの値をコンソールに表示：5が出力される
console.log(foo); // 5
// fooに文字列'test'を再代入しようとするが、エラーが発生：const変数には再代入できない
foo = 'test'; // TypeError: Assignment to constant variable.
// この行は実行されない
console.log(foo);