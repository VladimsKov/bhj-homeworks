const fontSizeList = document.querySelector('.book__control_font-size').children;
const fontColorList = document.querySelector('.book__control_color').children;
const backgroundList = document.querySelector('.book__control_background').children;
const textElem = document.querySelector('.book');

let active = fontSizeList.item(1);
let activeFontColor = fontColorList.item(1);
let activeBackground = backgroundList.item(3);

function delClasses(str) {
    if (textElem.classList.contains(str)) {
        textElem.classList.remove(str);
    } 
}

//выбор размера шрифта
function chooseFontSize(elem) {
    if (elem !== active) {
        active.classList.remove('font-size_active');
        elem.classList.add('font-size_active');
        switch(elem.dataset.size) {
            case "small" : {
                textElem.classList.add('book_fs-small');
                delClasses('book_fs-big');
            }            
            break;
            
            case "big" : {
                textElem.classList.add('book_fs-big');
                delClasses('book_fs-small');
            }
            break;
            
            default: {
                delClasses('book_fs-big');
                delClasses('book_fs-small');
            }                  
        }
        active = elem;
    }    
}

//выбор цвета шрифта
function chooseFontColor(elem) {
    if (elem !== activeFontColor) {
        activeFontColor.classList.remove('color_active');
        elem.classList.add('color_active');
        switch(elem.dataset.textColor) {
            case "black" : {
                textElem.classList.add('book_color-black');
                delClasses('book_color-gray');
                delClasses('book_color-whitesmoke');
            }            
            break;
            
            case "gray" : {
                textElem.classList.add('book_color-gray');
                delClasses('book_color-black');
                delClasses('book_color-whitesmoke');
            }
            break;
            
            case "whitesmoke" : {
                textElem.classList.add('book_color-whitesmoke');
                delClasses('book_color-black');
                delClasses('book_color-gray');
            }                  
        }
        activeFontColor = elem;
    }    
}

//выбор фона
function chooseBackground(elem) {
    if (elem !== activeBackground) {
        activeBackground.classList.remove('color_active');
        elem.classList.add('color_active');
        switch(elem.dataset.bgColor) {
            case "black" : {
                textElem.classList.add('book_bg-black');
                delClasses('book_bg-gray');
                delClasses('book_bg-white');
            }            
            break;
            
            case "gray" : {
                textElem.classList.add('book_bg-gray');
                delClasses('book_bg-black');
                delClasses('book_bg-white');
            }
            break;
            
            case "white" : {
                textElem.classList.add('book_bg-white');
                delClasses('book_bg-black');
                delClasses('book_bg-gray');
            }                  
        }
        activeBackground = elem;
    }    
}

//обработчики размера шрифта
for (let i = 0; i < fontSizeList.length; i++) {
    let elem = fontSizeList.item(i);
    elem.addEventListener("click", function(e) {
        e.preventDefault();
        chooseFontSize(elem);
    });
}

//обработчики цвета шрифта
for (let i = 1; i < fontColorList.length; i++) {
    let elem = fontColorList.item(i);
    elem.addEventListener("click", function(e) {
        e.preventDefault();
        chooseFontColor(elem);
    });
}

//обработчики фона
for (let i = 1; i < backgroundList.length; i++) {
    let elem = backgroundList.item(i);
    elem.addEventListener("click", function(e) {
        e.preventDefault();
        chooseBackground(elem);
    });
}