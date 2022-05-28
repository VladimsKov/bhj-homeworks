const timer = document.getElementById("timer");
let startValue = timer.textContent.split(':');
console.log(startValue);
let secValue = +startValue[2];
let minValue = +startValue[1];
let hoursValue = +startValue[0];

function timerCount() {
    if (secValue !== 0)  {secValue--;        
    } else {
        if (minValue !== 0) {
            secValue = secValue + 59;
            minValue--; 
        } else {
            if (hoursValue !==0) {
                minValue = minValue + 59;
                secValue = secValue + 59;
                hoursValue--;
            } else {
                clearInterval(timerId);
                alert("Вы победили в конкурсе!"); 
            }
        }
    }
    // вывод в формате 00:00:00
    let hoursValueOut = (hoursValue < 10) ? "0" + hoursValue : hoursValue;
    let minValueOut = (minValue < 10) ? "0" + minValue : minValue;
    let secValueOut = (secValue < 10) ? "0" + secValue : secValue;
    
    timer.textContent = hoursValueOut + ":" + minValueOut + ":" + secValueOut;      
} 

let timerId = setInterval(timerCount, 1000);