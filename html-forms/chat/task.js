const textChat = document.querySelector('.chat-widget');
const messageText = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const messagesContainer = document.querySelector('.chat-widget__messages-container');
const answerList = [
    'Где ваша совесть',
    'Вы ничего не купили',
    'Пишите завтра',
    'Пишите конкретный вопрос',
    'Возможно, мы поможем вам'
];
let dateTime = 0;
let timerID;
let flag = true;

function delayQuestion(time) {
    let date = new Date();
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${outputTime(date.getHours())}:${outputTime(date.getMinutes())}</div>
    <div class="message__text">
    Вы будете задавать ваш вопрос или мы заканчиваем?
    </div>
    </div>
    `;    
}

function randomAnswer(amount) {
    let rand = Math.random() * amount;
    return Math.floor(rand);
}

function outputTime(time) {
    return time = (time < 10) ? '0' +  time : time;
} 

function sendMessages() {
    document.addEventListener('keydown', (e) => {
        if (e.key == 'Enter' & !!messageText.value) {
            let date = new Date();
            messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${outputTime(date.getHours())}:${outputTime(date.getMinutes())}</div>
            <div class="message__text">
            ${messageText.value}
            </div>
            </div>
            `;
            dateTime = date.getTime();
            clearTimeout(timerID);
            
            timerID = setTimeout(delayQuestion, 30000, dateTime);
            
            let answerIndex = randomAnswer(answerList.length);
            setTimeout(function() {
                let date = new Date();
                messages.innerHTML += `
                <div class="message">
                <div class="message__time">${outputTime(date.getHours())}:${outputTime(date.getMinutes())}</div>
                <div class="message__text">
                ${answerList[answerIndex]}
                </div>
                </div>
                `; 
                messagesContainer.scrollTop = messagesContainer.scrollHeight; 
            }, 1000);            
            messagesContainer.scrollTop = messagesContainer.scrollHeight;                                          
        }             
    });
}

textChat.addEventListener('click', () => {
    textChat.classList.add('chat-widget_active');
    if (flag) {
        timerID = setTimeout(delayQuestion, 30000, dateTime);
        flag = !flag;
    }
});

sendMessages();