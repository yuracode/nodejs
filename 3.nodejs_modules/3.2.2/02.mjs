// c01.mjsからnum, add, subをインポート：計算関連の変数と関数を読み込み
import {num, add, sub} from './c01.mjs';

// インポートしたnumの値をコンソールに表示
console.log(num);
// add関数を使って3+1を計算し、結果をresに代入
let res = add(3, 1);
// resの値をコンソールに表示：4が出力される
console.log(res);

// sub関数を使って3-1を計算し、結果をresに代入
res = sub(3, 1);
// resの値をコンソールに表示：2が出力される
console.log(res);
