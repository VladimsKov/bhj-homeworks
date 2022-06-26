const pollQuestion = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function votesStat(voteId, answerId) {
    const xhr = new XMLHttpRequest;
    xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.addEventListener('readystatechange', function() {
        if (this.readyState === this.DONE && this.status === 200) {
            let votesData = JSON.parse(this.responseText);
            pollQuestion.nextElementSibling.remove();
            let votesSum = votesData.stat.reduce((sum, current) => sum + +current.votes, 0);
            outputVotesData(votesData, votesSum);           
        }        
    });
    xhr.send( `vote=${voteId}&answer=${answerId}`);
} 

function outputVotesData(votesData, votesSum) {
    votesData.stat.forEach((item, index) => {
        let voteElem = document.createElement('div');
        voteElem.innerHTML = `${item.answer}: ${(+item.votes / votesSum * 100).toFixed(2)}%`;
        pollQuestion.parentElement.appendChild(voteElem);
    });
}

let xhrPoll = new XMLHttpRequest();
xhrPoll.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhrPoll.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE && this.status === 200) {
        let pollData = JSON.parse(this.responseText);
        let voteId = pollData.id;
        pollQuestion.innerHTML = `${pollData.data.title}`;
        pollData.data.answers.forEach((item, index) => {            
            let elem = document.createElement('button');
            elem.className = 'poll__answer';
            elem.innerText = item;
            pollAnswers.insertAdjacentElement('beforeend', elem);
            elem.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                let answerId = index;
                votesStat(voteId, answerId);
            });            
        });
    }
});
xhrPoll.send();