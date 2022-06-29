const textBlock = document.getElementById('editor');
const clearTextButton = document.getElementById('clearEditor');

textBlock.addEventListener('change', () => {
    //console.log(textBlock.value);
    localStorage.setItem('textAreaData', textBlock.value);
});
window.addEventListener('load', () => {
    textBlock.value = localStorage.getItem('textAreaData');  
});

clearTextButton.addEventListener('click', () => {
    if (textBlock.value) {
        textBlock.value ='';
        localStorage.removeItem('textAreaData');
    }
})