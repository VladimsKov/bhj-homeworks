const hasTipElems = Array.from(document.querySelectorAll('.has-tooltip'));
let activeIndex = -1;

function makeTip(elem) {
    let tipText = elem.getAttribute('title');
    let tip = document.createElement('div');
    tip.className = 'tooltip';
    tip.innerText = tipText;
    elem.insertAdjacentElement('afterEnd', tip);
    tip.setAttribute('data-position', 'left');
}

function tipPosition(elem) {
    const tipHeight = elem.nextElementSibling.clientHeight;
    const tipWidth = elem.nextElementSibling.clientWidth;
    
    switch(elem.nextElementSibling.dataset.position) {
        case 'bottom' : {
            elem.nextElementSibling.style.left = elem.getBoundingClientRect().left.toFixed() + 'px';
            elem.nextElementSibling.style.top = elem.getBoundingClientRect().bottom.toFixed() + 'px';
        }
        break;
        case 'top' : {
            elem.nextElementSibling.style.left = elem.getBoundingClientRect().left.toFixed() + 'px';
            elem.nextElementSibling.style.top = (elem.getBoundingClientRect().top - tipHeight).toFixed() + 'px';
        }
        break;
        case 'left' : {
            elem.nextElementSibling.style.left = (elem.getBoundingClientRect().left - tipWidth).toFixed() + 'px';
            elem.nextElementSibling.style.top = elem.getBoundingClientRect().top.toFixed() + 'px';
        }
        break;
        case 'right' : {
            elem.nextElementSibling.style.left = elem.getBoundingClientRect().right.toFixed() + 'px';
            elem.nextElementSibling.style.top = elem.getBoundingClientRect().top.toFixed() + 'px';
        }            
    } 
}

hasTipElems.forEach((item, index) => {
    makeTip(item);    
    item.addEventListener('click', (e) => {
        e.preventDefault();                
        if (activeIndex > -1 & activeIndex != index) {
            hasTipElems[activeIndex].nextElementSibling.classList.remove('tooltip_active');
        }
        item.nextElementSibling.classList.toggle('tooltip_active');        
        if (item.nextElementSibling.classList.contains('tooltip_active')) {
            tipPosition(item);            
        }
        activeIndex = index;                      
    })    
});