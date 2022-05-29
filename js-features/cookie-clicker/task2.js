const image = document.getElementById("cookie");
const clickAmount = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("speed__counter");
let count = 0;
let lastCountTime; 

image.onclick = () => {
    let countTime = new Date;
    count++;    
    if (count == 1) {
        lastCountTime = countTime.getTime();
    } else {
        let countTime = new Date();
        clickSpeed.textContent = (1000 / (countTime.getTime() - lastCountTime)).toFixed(2);
        lastCountTime = countTime.getTime();        
    }    
    clickAmount.textContent = count;
    image.width = (count % 2 == 0) ? image.width + 10 : image.width - 10;    
}  