var express = require('express');
var router = express.Router();

// ユーザーデータ（簡易データストア）
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// GET /users - ユーザー一覧取得
router.get('/', function(req, res, next) {
  // 全ユーザーを JSON 形式で返す
  res.status(200).json(users);
});

// GET /users/:id - 特定ユーザー取得
router.get('/:id', function(req, res, next) {
  // パスパラメータから id を取得
  const userId = parseInt(req.params.id);
  // id に一致するユーザーを探す
  const user = users.find(u => u.id === userId);
  
  if (user) {
    // ユーザーが見つかった場合
    res.status(200).json(user);
  } else {
    // ユーザーが見つからない場合は 404 を返す
    res.status(404).json({ message: 'User not found' });
  }
});

// POST /users - 新規ユーザー作成
router.post('/', function(req, res, next) {
  // リクエストボディから name を取得
  const { name } = req.body;
  
  if (!name) {
    // name が指定されていない場合は 400 エラー
    return res.status(400).json({ message: 'Name is required' });
  }
  
  // 新しい id を生成（既存の最大 id + 1）
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  // 新しいユーザーオブジェクトを作成
  const newUser = { id: newId, name };
  // 配列に追加
  users.push(newUser);
  
  // 作成したユーザーを 201 Created で返す
  res.status(201).json(newUser);
});

// PUT /users/:id - ユーザー情報更新
router.put('/:id', function(req, res, next) {
  // パスパラメータから id を取得
  const userId = parseInt(req.params.id);
  // リクエストボディから name を取得
  const { name } = req.body;
  
  if (!name) {
    // name が指定されていない場合は 400 エラー
    return res.status(400).json({ message: 'Name is required' });
  }
  
  // id に一致するユーザーを探す
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex !== -1) {
    // ユーザーが見つかった場合、名前を更新
    users[userIndex].name = name;
    res.status(200).json(users[userIndex]);
  } else {
    // ユーザーが見つからない場合は 404 を返す
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE /users/:id - ユーザー削除
router.delete('/:id', function(req, res, next) {
  // パスパラメータから id を取得
  const userId = parseInt(req.params.id);
  // id に一致するユーザーを探す
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex !== -1) {
    // ユーザーが見つかった場合、配列から削除
    const deletedUser = users.splice(userIndex, 1)[0];
    res.status(200).json(deletedUser);
  } else {
    // ユーザーが見つからない場合は 404 を返す
    res.status(404).json({ message: 'User not found' });
  }
});

// ルーターをエクスポート
module.exports = router;
