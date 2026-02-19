// num変数を名前付きエクスポート：値は1
export const num = 1

// 関数addを名前付きエクスポート：2つの引数を加算する関数
export const add = (a, b) => {
    return a + b;
};

// 関数subを名前付きエクスポート：2つの引数を減算する関数
export const sub = (a, b) => {
    return a - b;
};

// デフォルトエクスポート：デフォルトとしてエクスポートされる関数
export default function (){
    console.log("This is default export function");
}