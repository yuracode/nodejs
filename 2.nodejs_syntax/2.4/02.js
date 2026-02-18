// printName関数を定義
function printName(){
    // this.nameを出力
    console.log('printName this.name' ,this.name);
}

// objオブジェクトを定義
const obj = {
    // nameプロパティ
    name: 'my-name',
    // printNameメソッド
    printName: printName
};

// objのprintNameを呼び出し
obj.printName();
