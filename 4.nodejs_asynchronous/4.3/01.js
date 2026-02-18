// Promise Aを作成：resolveでデータを返す
const promiseA = new Promise((resolve, reject) => {
    resolve('return data from promiseA');
});

// Promise Bを作成：rejectでエラーを返す
const promiseB = new Promise((resolve, reject) => {
    reject('error from promiseB');
    // reject(new Error('error from promiseB'));
});

// promiseAがresolveされたらデータをコンソールに表示
promiseA.then((data) => {
    console.log('promiseA resolved:', data);
});

// promiseBがrejectされたらエラーをコンソールに表示
promiseB.catch((error) => {
    console.error('promiseB rejected:', error);
});

