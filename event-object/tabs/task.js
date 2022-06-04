const arrTabs = Array.from(document.querySelectorAll('.tab'));
const contentList = Array.from(document.querySelectorAll('.tab__content'));
activeIndex = 0;

function tabClickActive(idx) {
    arrTabs[idx].className = 'tab tab_active';
    contentList[idx].className = 'tab__content tab__content_active';
}

function tabClickPassive(idx) {
    arrTabs[idx].className = 'tab';
    contentList[idx].className = 'tab__content';
} 

arrTabs.forEach((item, index) => {
    item.onclick = function() {
        tabClickPassive(activeIndex);
        tabClickActive(index);
        activeIndex = index;
    }
})