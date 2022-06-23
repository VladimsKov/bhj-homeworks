const card = document.querySelectorAll('.interests_main > ul > li');

function changeCheck(list) {
    if (list[0].checked) {
        for (let i = 1; i < list.length; i++) {
            list[i].checked = true;
        } 
    } else {
        for (let i = 1; i < list.length; i++) {
            list[i].checked = false;
        }
    }
}

for (let item of card) {
    let checkBoxList = Array.from(item.querySelectorAll('.interest__check'));
    checkBoxList.forEach(elem => {
        elem.checked = false;        
    });
    checkBoxList[0].addEventListener('change', function() {
        changeCheck(checkBoxList)
    });    
} 