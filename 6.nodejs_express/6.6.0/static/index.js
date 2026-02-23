// users.ejsのclass userをクリックされたらidを表示するスクリプトを書いて
document.addEventListener('DOMContentLoaded', () => {
    // class "user" を持つ要素を全て取得
    const userElements = document.querySelectorAll('.user');
    // 各ユーザー要素にクリックイベントリスナーを追加
    userElements.forEach((element, index) => {
        element.addEventListener('click', () => {
            // クリックされたユーザーのIDを表示（index + 1 をIDとする）
            alert(`User ID: ${index + 1}`);
        });
    });
});