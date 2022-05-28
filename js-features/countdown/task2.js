const timer = document.getElementById("timer");
let startValue = timer.textContent;
let timerId = setInterval(() => {
    startValue--;
    timer.textContent = startValue;
    if (startValue == 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");    
    }
}, 1000);
