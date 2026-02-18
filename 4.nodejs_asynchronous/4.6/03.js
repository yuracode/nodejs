// fsモジュールをインポート：ファイルシステム操作を行うためのモジュール
const fs = require('fs');
// fs/promisesからwriteFileをインポート：非同期ファイル書き込みを行うための関数
const {writeFile} = require('fs/promises');

// sleep関数：指定されたミリ秒数だけ待機するPromiseを返す
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 書き込み先のファイル名を生成：現在のファイル名にタイムスタンプを付加
const writeFileName = `${__filename}-${Date.now()}`;

// write関数：ランダムな時間待機してから、指定されたチャンクをファイルに追記する
const write = async (chunk) => {
    // 0から1000ミリ秒のランダムな時間待機
    await sleep(Math.random() * 1000);
    // ファイルを追記モードで書き込み
    await writeFile(writeFileName, chunk, {flag: 'a'});
    // 書き込み完了をコンソールに表示
    console.log(`Chunk written to ${writeFileName}`);
};

// main関数：プログラムのメイン処理
const main = async () => {
    // 現在のファイルを読み取りストリームとして作成：エンコーディングはutf8、高水位マークは64バイト
    const readStream = fs.createReadStream(__filename, {encoding: 'utf8',highWaterMark: 64});
    // チャンクカウンターを初期化
    let counter = 0;

    // ストリームからチャンクを非同期で読み取り
    for await (const chunk of readStream) {
        // チャンク番号をインクリメントしてコンソールに表示
        console.log(`Chunk ${++counter} read:`, chunk);
        // 読み取ったチャンクを書き込み関数に渡す
        await write(chunk);
    }
    // ストリームが閉じられたことをコンソールに表示
    console.log('Stream closed');
};

// main関数を実行し、エラーが発生した場合はコンソールに表示
main().catch((err) => {
    console.error('Error:', err);
});