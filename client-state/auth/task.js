const signingForm = document.getElementById('signin__form');
const greating = document.getElementById('welcome');

function xhr(method, url, data) {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.responseType ='json';
    request.addEventListener('load', function() {
        if (this.response.success) {
            console.log(this.response);
            localStorage.setItem('id', this.response.user_id);
            greating.firstElementChild.textContent = this.response.user_id;
            signingForm.closest('.signin').classList.remove('signin_active');
            greating.classList.add('welcome_active');                
        } else {
            alert('Неверный логин или пароль');
            signingForm.reset();                
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
    const signingData = new FormData(signingForm);
    xhr('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', signingData);
})
