// 他にも書き方はあります。
module.exports = { // モジュール全体をオブジェクトとしてエクスポート
    num: 1, // numプロパティ
    // 関数addのエクスポート
    add: (a, b) => { // add関数：加算
        return a + b; // 結果を返す
    },
    // 関数subのエクスポート
    sub: (a, b) => { // sub関数：減算
        return a - b; // 結果を返す
    }
};