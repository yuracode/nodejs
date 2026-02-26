```mermaid
sequenceDiagram
    participant B as ブラウザ
    participant S as 正規サイト<br/>localhost:3000
    participant A as 正規API<br/>localhost:4000
    participant E as 悪意のあるAPI<br/>evil.com

    B->>S: index.html を取得
    S-->>B: HTMLを返す

    rect rgb(200, 255, 200)
        Note over B,A: ✅ 正常なケース
        B->>A: fetch /api/hello
        A-->>B: Access-Control-Allow-Origin: * 
        B->>B: 許可！表示する
    end

    rect rgb(255, 200, 200)
        Note over B,E: ❌ CORSブロックのケース
        B->>E: fetch /api/data
        E-->>B: (Authorizationヘッダーなし or 許可なし)
        B->>B: ブロック！エラー
    end

```