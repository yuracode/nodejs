# ユーザー管理アプリケーション

Express を使ったシンプルなユーザー管理 Web アプリケーションです。REST API と Web UI の両方を提供します。

## プロジェクト構成

```
myapp/
├── server.js                    # メインサーバーファイル（Express 設定 + ルーティング）
├── package.json                 # 依存関係の定義
├── routes/
│   └── users.js                # ユーザー REST API のルーティング
├── views/
│   ├── index.ejs               # トップページ
│   └── userManage.ejs          # ユーザー管理画面
└── public/
    ├── stylesheets/
    │   ├── style.css           # 基本スタイル
    │   └── userManage.css      # ユーザー管理画面用スタイル
    └── javascripts/
        └── userManage.js       # ユーザー管理画面の JavaScript（API 呼び出し）
```

## REST API 設計

### ベース URL
```
http://localhost:3000/users
```

### エンドポイント一覧

#### 1. ユーザー一覧取得
```
GET /users
```

**レスポンス例:**
```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" },
  { "id": 3, "name": "Charlie" }
]
```

**ステータスコード:**
- `200 OK` - 成功

---

#### 2. 特定ユーザー取得
```
GET /users/:id
```

**パラメータ:**
- `id` (number) - ユーザー ID

**レスポンス例（成功時）:**
```json
{ "id": 1, "name": "Alice" }
```

**レスポンス例（失敗時）:**
```json
{ "message": "User not found" }
```

**ステータスコード:**
- `200 OK` - 成功
- `404 Not Found` - ユーザーが見つからない

---

#### 3. ユーザー作成
```
POST /users
```

**リクエストボディ:**
```json
{ "name": "David" }
```

**レスポンス例（成功時）:**
```json
{ "id": 4, "name": "David" }
```

**レスポンス例（失敗時）:**
```json
{ "message": "Name is required" }
```

**ステータスコード:**
- `201 Created` - 成功
- `400 Bad Request` - name が指定されていない

---

#### 4. ユーザー更新
```
PUT /users/:id
```

**パラメータ:**
- `id` (number) - ユーザー ID

**リクエストボディ:**
```json
{ "name": "Alice Smith" }
```

**レスポンス例（成功時）:**
```json
{ "id": 1, "name": "Alice Smith" }
```

**レスポンス例（失敗時）:**
```json
{ "message": "User not found" }
```
または
```json
{ "message": "Name is required" }
```

**ステータスコード:**
- `200 OK` - 成功
- `400 Bad Request` - name が指定されていない
- `404 Not Found` - ユーザーが見つからない

---

#### 5. ユーザー削除
```
DELETE /users/:id
```

**パラメータ:**
- `id` (number) - ユーザー ID

**レスポンス例（成功時）:**
```json
{ "id": 1, "name": "Alice" }
```

**レスポンス例（失敗時）:**
```json
{ "message": "User not found" }
```

**ステータスコード:**
- `200 OK` - 成功
- `404 Not Found` - ユーザーが見つからない

---

## セットアップ手順

### 1. 依存パッケージのインストール

```bash
npm install
```

必要なパッケージ:
- `express` - Web フレームワーク
- `ejs` - テンプレートエンジン

### 2. ユーザー管理画面の有効化

**重要:** ユーザー管理画面（`/userManage`）を使用するには、以下のファイルでコメントを解除する必要があります。

**ファイル:** `myapp/server.js`

以下の部分のコメントを解除してください：

```javascript
// GET /userManage - ユーザー管理画面
// app.get('/userManage', (req, res) => {
//   res.render('userManage', { title: 'User Management' });
// });
```

↓ コメントを解除

```javascript
// GET /userManage - ユーザー管理画面
app.get('/userManage', (req, res) => {
  res.render('userManage', { title: 'User Management' });
});
```

この変更により、`http://localhost:3000/userManage` でユーザー管理画面にアクセスできるようになります。

### 3. サーバー起動

```bash
node server.js
```

または

```bash
npm start
```

起動すると以下のメッセージが表示されます:
```
Server is running on port 3000
```

---

## 使い方

### Web UI でユーザー管理

1. ブラウザで `http://localhost:3000/` にアクセス
2. 「ユーザー管理」リンクをクリック
3. ユーザー管理画面（`/userManage`）で以下の操作が可能:
   - **ユーザー一覧表示** - ページ読み込み時に自動表示
   - **新規ユーザー追加** - 上部のフォームに名前を入力して「追加」ボタンをクリック
   - **ユーザー情報更新** - 各ユーザーの名前を編集して「更新」ボタンをクリック
   - **ユーザー削除** - 各ユーザーの「削除」ボタンをクリック（確認ダイアログが表示されます）

### REST API を直接使用

#### curl を使った例

```bash
# ユーザー一覧取得
curl http://localhost:3000/users

# 特定ユーザー取得
curl http://localhost:3000/users/1

# 新規ユーザー作成
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"David\"}"

# ユーザー情報更新
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Alice Smith\"}"

# ユーザー削除
curl -X DELETE http://localhost:3000/users/1
```

#### PowerShell を使った例

```powershell
# ユーザー一覧取得
Invoke-RestMethod -Uri "http://localhost:3000/users" -Method Get

# 新規ユーザー作成
Invoke-RestMethod -Uri "http://localhost:3000/users" -Method Post `
  -ContentType "application/json" `
  -Body '{"name":"David"}'

# ユーザー情報更新
Invoke-RestMethod -Uri "http://localhost:3000/users/1" -Method Put `
  -ContentType "application/json" `
  -Body '{"name":"Alice Smith"}'

# ユーザー削除
Invoke-RestMethod -Uri "http://localhost:3000/users/1" -Method Delete
```

---

## 技術スタック

### バックエンド
- **Node.js** - JavaScript ランタイム
- **Express** - Web フレームワーク
- **EJS** - テンプレートエンジン

### フロントエンド
- **HTML/CSS** - UI
- **Fetch API** - REST API 呼び出し
- **Vanilla JavaScript** - フロントエンドロジック（フレームワーク不使用）

### データストア
- **メモリ内配列** - 簡易データストア（本番環境では DB を使用）

---

## 主な特徴

- シンプルな構成（最小限のミドルウェア）
- REST API の基本操作（CRUD）を実装
- フロントエンドとバックエンドの分離
- Fetch API を使った非同期通信
- レスポンシブル UI
- エラーメッセージの表示

---

## 注意事項

- このアプリケーションはデータをメモリ内の配列に保存しているため、サーバーを再起動するとデータは初期状態に戻ります
- 本番環境で使用する場合は、データベース（MongoDB, PostgreSQL など）を使用してください
- 認証・認可機能は実装していません
- エラーハンドリングは最小限です

---

## ライセンス

MIT
