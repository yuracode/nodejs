// グローバルスコープでのthisがglobalと等しいか確認
console.log(this === global); // true

// isGlobal関数を定義
function isGlobal() {
    // 関数内でのthisがglobalと等しいか確認
    console.log(this === global); // true
}   

// isGlobalを呼び出し
isGlobal();

// printName関数を定義
function printName(){
    // this.nameを出力
    console.log('printName this.name' ,this.name);
}

// printNameを呼び出し
printName();