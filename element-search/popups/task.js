 const modalWindow = document.getElementById('modal_main');
 modalWindow.className = 'modal modal_active';
 const modalClose = document.querySelectorAll('.modal__close_times');
 const showSuccess = document.querySelector('.show-success');
 const modalSuccess = document.getElementById('modal_success');
 
 for (let elem of modalClose) {
    elem.onclick = function() {
        this.closest('.modal_active').className = 'modal';
    }
}

showSuccess.onclick = () => {
    modalWindow.className = 'modal';
    modalSuccess.className = 'modal modal_active';
}