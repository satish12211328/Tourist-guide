document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!email) emailError.textContent = "Enter your email.";
    if (!password) passwordError.textContent = "Enter your password.";
});