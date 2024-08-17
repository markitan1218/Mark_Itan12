// On DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const createAccountForm = document.getElementById('createAccountForm');
    const createAccountBtn = document.getElementById('createAccountBtn');
    const backToLoginBtn = document.getElementById('backToLoginBtn');
    const errorMessage = document.getElementById('errorMessage');
    const createAccountMessage = document.getElementById('createAccountMessage');

    // Initialize users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (users[username] && users[username] === password) {
                window.location.href = 'login.html';
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        });
    }

    if (createAccountForm) {
        createAccountForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;

            if (!users[username]) {
                users[username] = password;
                localStorage.setItem('users', JSON.stringify(users));
                createAccountMessage.textContent = 'Account created successfully!';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                createAccountMessage.textContent = 'Username already exists';
            }
        });
    }

    if (createAccountBtn) {
        createAccountBtn.addEventListener('click', () => {
            window.location.href = 'createAccount.html';
        });
    }

    if (backToLoginBtn) {
        backToLoginBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
