// ページ読み込み時にユーザー一覧を取得
document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
});

// メッセージ表示関数
function showMessage(message, isSuccess = true) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = isSuccess ? 'message success' : 'message error';
    
    // 3秒後にメッセージを消す
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}

// ユーザー一覧を取得して表示
async function loadUsers() {
    try {
        // GET /users を呼び出してユーザー一覧を取得
        const response = await fetch('/users');
        
        if (!response.ok) {
            throw new Error('ユーザー一覧の取得に失敗しました');
        }
        
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error:', error);
        showMessage('ユーザー一覧の取得に失敗しました', false);
    }
}

// ユーザー一覧を画面に表示
function displayUsers(users) {
    const userListDiv = document.getElementById('userList');
    
    if (users.length === 0) {
        userListDiv.innerHTML = '<p>ユーザーが登録されていません</p>';
        return;
    }
    
    // ユーザーごとに HTML を生成
    userListDiv.innerHTML = users.map(user => `
        <div class="user-item" data-user-id="${user.id}">
            <span>ID: ${user.id}</span>
            <input type="text" id="userName-${user.id}" value="${user.name}">
            <button class="btn-update" onclick="updateUser(${user.id})">更新</button>
            <button class="btn-delete" onclick="deleteUser(${user.id})">削除</button>
        </div>
    `).join('');
}

// 新規ユーザーを追加
async function addUser() {
    const nameInput = document.getElementById('newUserName');
    const name = nameInput.value.trim();
    
    if (!name) {
        showMessage('ユーザー名を入力してください', false);
        return;
    }
    
    try {
        // POST /users を呼び出してユーザーを作成
        const response = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });
        
        if (!response.ok) {
            throw new Error('ユーザーの追加に失敗しました');
        }
        
        const newUser = await response.json();
        showMessage(`ユーザー "${newUser.name}" を追加しました`);
        
        // 入力フィールドをクリア
        nameInput.value = '';
        
        // ユーザー一覧を再読み込み
        loadUsers();
    } catch (error) {
        console.error('Error:', error);
        showMessage('ユーザーの追加に失敗しました', false);
    }
}

// ユーザー情報を更新
async function updateUser(userId) {
    const nameInput = document.getElementById(`userName-${userId}`);
    const name = nameInput.value.trim();
    
    if (!name) {
        showMessage('ユーザー名を入力してください', false);
        return;
    }
    
    try {
        // PUT /users/:id を呼び出してユーザー情報を更新
        const response = await fetch(`/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });
        
        if (!response.ok) {
            throw new Error('ユーザーの更新に失敗しました');
        }
        
        const updatedUser = await response.json();
        showMessage(`ユーザー ID: ${updatedUser.id} を更新しました`);
        
        // ユーザー一覧を再読み込み
        loadUsers();
    } catch (error) {
        console.error('Error:', error);
        showMessage('ユーザーの更新に失敗しました', false);
    }
}

// ユーザーを削除
async function deleteUser(userId) {
    // 削除確認
    if (!confirm('本当にこのユーザーを削除しますか？')) {
        return;
    }
    
    try {
        // DELETE /users/:id を呼び出してユーザーを削除
        const response = await fetch(`/users/${userId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('ユーザーの削除に失敗しました');
        }
        
        const deletedUser = await response.json();
        showMessage(`ユーザー "${deletedUser.name}" を削除しました`);
        
        // ユーザー一覧を再読み込み
        loadUsers();
    } catch (error) {
        console.error('Error:', error);
        showMessage('ユーザーの削除に失敗しました', false);
    }
}
