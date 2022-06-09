const blocks = document.querySelectorAll('.reveal');

function showBlocks() {
    for (let item of blocks) {
        let topMargin = item.getBoundingClientRect().top;
        let bottomMargin = item.getBoundingClientRect().bottom;
        
        if (bottomMargin < window.innerHeight && topMargin > 0) {
            item.classList.add('reveal_active')
        } else {
            item.classList.remove('reveal_active')
        }
    }
}
window.onscroll = showBlocks;