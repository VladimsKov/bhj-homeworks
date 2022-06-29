const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close_times');

const getCookie = function(name) {
    const value =';' + document.cookie;
    let parts = value.split(';' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

window.addEventListener('load', () => {
    if (!getCookie('modalWindowActive')) {
        modalWindow.classList.add('modal_active');
    }
});

modalClose.addEventListener('click', () => {
    modalClose.closest('.modal_active').classList.remove('modal_active');
    document.cookie = 'modalWindowActive=closed';
});
