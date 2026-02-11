export const num = 1

// 関数addのエクスポート
export const add = (a, b) => {
    return a + b;
};

// 関数subのエクスポート
export const sub = (a, b) => {
    return a - b;
};

export default function (){
    console.log("This is default export function");
}