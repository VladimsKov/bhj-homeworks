class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.input__timer');
    
    this.reset();
    
    this.registerEvents();
    
    this.inputTimer();
  }
  
  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;        
  }
  
  inputTimer() {
    
    this.timerId = setInterval(() => {
      if (this.leftTime !== 0) {
        this.leftTime--;
        this.timerElement.textContent = this.leftTime;
      } else {
        this.stopTimer();
        alert('Время вышло');
        this.setNewWord();
        this.inputTimer();
      }
      
    }, 1000);    
  }
  
  stopTimer() {
    clearInterval(this.timerId);    
  }
  
  registerEvents() {
    
    document.addEventListener('keydown', (event) => {
      let inputSumbol = event.key.toUpperCase();
      let wordSymbol = this.currentSymbol.textContent.toUpperCase();
      if (inputSumbol == wordSymbol) {
        this.success();
      } else {
        this.fail();
      }
    });    
  }
  
  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      
      return;
    }
    
    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }
  
  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }
  
  setNewWord() {
    
    const word = this.getWord();
    this.timerElement.textContent = this.leftTime;
    
    this.renderWord(word);
  }
  
  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
    index = Math.floor(Math.random() * words.length);
    this.leftTime = words[index].length;
    return words[index];
  }
  
  renderWord(word) {
    const html = [...word]
    .map(
      (s, i) =>
      `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
      this.wordElement.innerHTML = html;
      
      this.currentSymbol = this.wordElement.querySelector('.symbol_current');      
    }
  }
  
  new Game(document.getElementById('game'))
  
  