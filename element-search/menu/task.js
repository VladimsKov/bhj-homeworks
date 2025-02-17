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

arrLinks.forEach((item) => {
    let parentItem = item.closest('.menu__item');
    let subItem = parentItem.querySelector('.menu_sub');
    if (subItem) {
        item.onclick = () => {
            if (subItem.className == 'menu menu_sub menu_active') {
                subItem.className = 'menu menu_sub';
            } else {
                subItem.className = 'menu menu_sub menu_active';
                closeOtherLinks(subItem);
            }            
            return false;
        }
    }    
});        