const getLogin = document.querySelector('.login-form');
getLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    const loginInput = document.getElementsByName('email')[0];
    const passwordInput = document.getElementsByName('password')[0];
    if (loginInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('All form fields must be filled in!');
        return;
    }else {
        const user = {
            email: loginInput.value.trim(),
            password: passwordInput.value.trim(),
        }
        console.log(user);
    }
    getLogin.reset();
});