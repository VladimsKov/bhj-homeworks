const menuButton = document.querySelector('.dropdown__value');
const itemsList  = document.querySelector('.dropdown__list');
const linksList = document.querySelectorAll('.dropdown__link');
console.log(linksList);
menuButton.onclick = () => {
    if (itemsList.className == 'dropdown__list') {
        itemsList.className = 'dropdown__list dropdown__list_active';        
    } else {
        itemsList.className = 'dropdown__list';     
    }
}

linksList.forEach((item) => {    
    item.onclick = () => {
        menuButton.textContent = item.textContent;
        itemsList.className = 'dropdown__list';
        return false;
    }
});
