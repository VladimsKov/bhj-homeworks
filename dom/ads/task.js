const rotators = document.querySelectorAll('.rotator');

rotators.forEach(function(item) {
    let rotatorList = Array.from(item.children);
    i = 0;
    
    function rotate() {
        rotatorList[i].classList.remove('rotator__case_active');
        if (i == rotatorList.length - 1) {
            i = 0;
            rotatorList[i].classList.add('rotator__case_active');
            return;            
        } else {   
            rotatorList[i+1].classList.add('rotator__case_active');
            i++;
        }                    
    }    
    let timer = setInterval(rotate, 1000);    
})
