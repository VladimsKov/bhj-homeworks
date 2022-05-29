const image = document.getElementById("cookie");
const clickAmount = document.getElementById("clicker__counter");
let count = 0;

image.onclick = () => {
    count++;
    clickAmount.textContent = count;
    image.width = (count % 2 == 0) ? image.width + 10 : image.width - 10; 
}  