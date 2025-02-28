// script.js
document.getElementById('login-form').addEventListener('submit', login);

function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        
        // Redirect to another page or perform other actions upon successful login
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
        document.getElementById('message').style.color = 'red';
    }

    document.getElementById('login-form').reset();
    document.getElementById('username').value ="";
    document.getElementById('password').value = "";

}
