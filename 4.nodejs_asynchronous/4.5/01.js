// eventsモジュールからEventEmitterクラスをインポート：イベントの発行と購読を行うためのクラス
const EventEmitter = require('events');

// EventEmitterを継承したMyEmitterクラスを定義
class MyEmitter extends EventEmitter {}

// MyEmitterのインスタンスを作成
const myEmitter = new MyEmitter();

// 'event'イベントのリスナーを登録：イベントが発生するとコールバック関数が実行される
myEmitter.on('event', (data) => {
    // イベントが発生したことをコンソールに表示し、渡されたデータを表示
    console.log('An event occurred!', data);
});

// 'event'イベントを発行：データ'one'を渡す
myEmitter.emit('event', 'one');

// 1秒後に'two'データを渡してイベントを発行
setTimeout(() => {
    myEmitter.emit('event', 'two');
}, 1000);
