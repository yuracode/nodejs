//exports と module.exports は併用しない。module.exportsが優先される。

module.exports = 'foo'; // モジュール全体を文字列'foo'としてエクスポート

exports.num = 1; // この行は無視される