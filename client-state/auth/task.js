const signingForm = document.getElementById('signin__form');
const greating = document.getElementById('welcome');
const loginField = signingForm.elements.login;
const passwordField = signingForm.elements.password;

function xhr(method, url, data) {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.addEventListener('readystatechange', function() {
        if (this.readyState === this.DONE && this.status === 200) {
            let responseData = JSON.parse(this.responseText); 
            if (responseData.success) {
                localStorage.setItem('id', responseData.user_id);
                greating.firstElementChild.textContent = responseData.user_id;
                signingForm.closest('.signin').classList.remove('signin_active');
                greating.classList.add('welcome_active');                
            } else {
                alert('Неверный логин или пароль');
                loginField.value = '';
                passwordField.value = '';
            }                      
        }
    })
    request.send(data);    
}

window.addEventListener('load', () => {
    let id = localStorage.getItem('id');
    if (id) {
        greating.firstElementChild.textContent = id;
        signingForm.closest('.signin').classList.remove('signin_active');
        greating.classList.add('welcome_active'); 
    }
})

signingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let signingData = new FormData(signingForm);
    xhr('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', signingData);
})
