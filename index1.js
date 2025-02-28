// script.js
document.getElementById('signup-form').addEventListener('submit', signUp);

function signUp(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        document.getElementById('message').textContent = 'Sign up successful!';
        document.getElementById('signup-form').reset();
    }
}
