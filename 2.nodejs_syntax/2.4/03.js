// printName関数を定義
function printName(){
    // 1秒後にthis.nameを出力するタイマーを設定
    setTimeout(function(){
        // this.nameを出力（ここではundefined）
        console.log('printName this.name' ,this.name);
    }, 1000);
}

// objオブジェクトを定義
const obj = {
    // nameプロパティ
    name: 'my-name',
    // printNameメソッド
    printName: printName
};

// objのprintNameを呼び出し（結果はundefined）
obj.printName();    // undefined