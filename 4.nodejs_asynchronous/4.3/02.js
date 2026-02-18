// 入力が数値かどうかをチェックするPromiseを返す関数
const promiseX = (x) => {
    return new Promise((resolve, reject) => {
        // xが数値型ならresolve、そうでなければreject
        if(typeof x === 'number') {
            resolve(x);
        } else {
            reject(new Error('Input must be a number'));
        }
    });
}

// 数値を受け取り、ログを出力して2倍にする関数
const logAndDouble = (num) => {
    // 受け取った数値をコンソールに表示
    console.log('Received number:', num);
    // 数値を2倍にして返す
    return num * 2;
}

// promiseXに1を渡して実行
promiseX(1)
    .then(logAndDouble) // 成功したらlogAndDoubleを実行
    .then((result) => {
        // 2倍した結果をコンソールに表示
        console.log('Doubled result:', result);
    })
    .catch((error) => {
        // エラーが発生したらエラーメッセージをコンソールに表示
        console.error('Error:', error.message);
    });

