const fileMessage = document.getElementById('form');
const progressBar  = document.getElementById('progress');
fileMessage.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(fileMessage);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', (e) => {
        progressBar.value = (e.loaded / e.total).toFixed(1);
    });
    /* xhr.addEventListener('loadend', function() {
        if (this.status === 200) {
            console.log('success');
        };        
    }); */
    xhr.send(formData);
})