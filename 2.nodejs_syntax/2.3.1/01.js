// Peopleクラスを定義
class People {
    // コンストラクタ
    constructor(name) {
        // nameプロパティを設定
        this.name = name;
    }

    // 名前を出力するメソッド
    printName() {
        // 名前を出力
        console.log(`Hello, my name is ${this.name} .`);
    }
}

// Peopleのインスタンスを作成
const foo = new People('foo-name');
// 名前を出力
foo.printName(); // Hello, my name is foo-name .