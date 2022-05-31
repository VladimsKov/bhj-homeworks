 const modalWindow = document.getElementById('modal_main');
 modalWindow.className = 'modal modal_active';
 const modalClose = document.querySelectorAll('.modal__close_times');
 const showSuccess = document.querySelector('.show-success');
 const modalSuccess = document.getElementById('modal_success');
 
 modalClose[0].onclick = () => modalWindow.className = 'modal';
 modalClose[1].onclick = () => {
    modalSuccess.className = 'modal';
    modalWindow.className = 'modal'; 
}
showSuccess.onclick = () => modalSuccess.className = 'modal modal_active';