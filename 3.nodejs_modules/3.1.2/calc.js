exports.num = 1 // num変数をエクスポート

// 関数addのエクスポート
exports.add = (a, b) => { // add関数をエクスポート：2つの引数を加算
    return a + b; // 加算結果を返す
};

// 関数subのエクスポート
exports.sub = (a, b) => { // sub関数をエクスポート：2つの引数を減算
    return a - b; // 減算結果を返す
};
