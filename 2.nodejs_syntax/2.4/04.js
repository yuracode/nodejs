// printName関数を定義
function printName(){
    // 1秒後にthis.nameを出力するタイマーを設定、thisをbind
    setTimeout(function(){
        // this.nameを出力
        console.log('printName this.name' ,this.name);
    }.bind(this), 1000);
}

// objオブジェクトを定義
const obj = {
    // nameプロパティ
    name: 'my-name',
    // printNameメソッド
    printName: printName
};

// objのprintNameを呼び出し（結果はmy-name）
obj.printName();    // my-name