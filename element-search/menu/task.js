const links = document.querySelectorAll('.menu__link');
const subLinks = document.querySelectorAll('.menu_sub'); 
const arrLinks = Array.from(links);

function closeOtherLinks (item) {
    for (let elem of subLinks) {
        if (elem !== item) {
            elem.className = 'menu menu_sub';                    
        }
    }
}

arrLinks.forEach((item, index) => {
    let parentItem = item.closest('.menu__item');
    let subItem = parentItem.querySelector('.menu_sub');
    if (subItem) {
        item.onclick = () => {
            subItem.className = 'menu menu_sub menu_active';
            closeOtherLinks(subItem);            
            return false;
        }
    }    
});        