// Peopleコンストラクタ関数を定義
function People(name){
    // nameプロパティを設定
    this.name = name;
}

// People.prototypeにprintNameメソッドを追加
People.prototype.printName = function(){
    // 名前を出力
    console.log(`Hello, my name is ${this.name} .`);
}

// Peopleのインスタンスを作成
const foo = new People('foo-name');
// 名前を出力
foo.printName(); // Hello, my name is foo-name .
