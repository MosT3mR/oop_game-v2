/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.getElementById('overlay')
const gameOverMessage = document.getElementById('game-over-message');
const keyLetters = document.getElementsByClassName('key')

class Game {
 constructor(){
    this.phrases = [new Phrase('Life is like a box of chocolates'),
    new Phrase('There is no trying'),
    new Phrase('May the force be with you'),
    new Phrase('No pain no Gain'),
    new Phrase('You talking to me')];
    this.activePhrase = null;
    this.missed = 0;
 }
 creatPhrase(phrase){
   this.phrases.push(phrase)
 }
 getRandomPhrase(){
   return this.phrases[Math.floor((Math.random()*this.phrases.length))]
 }
 startGame(){
  this.missed = 0;
  overlay.style.display = 'none';
  this.activePhrase = this.getRandomPhrase();
  this.activePhrase.addPhraseToDisplay();
 }

 handleInteraction(button){
   if(!button.disabled){
      button.disabled = true;
      if(this.activePhrase.checkLetter(button.textContent)){
        this.activePhrase.showMatchedLetter(button.textContent);
        button.classList.add('chosen');
        if(this.checkForWin()){
          this.gameOver(true)
        }
      }else{
        button.classList.add('wrong');
        this.removeLife();
      }
    }
 }

 checkForWin(){
  const countShow = document.getElementsByClassName('hide')
  if(countShow.length === 0){
    return true;
  }
 }
 removeLife(){
        const harts = document.querySelectorAll('.tries img')[this.missed];
        harts.src = 'images/lostHeart.png';
        if (this.missed < 5) {
            this.missed ++;
        }
        if (this.missed == 5) {
            this.gameOver(false);
        }
 }
 gameOver(gameWon){
  overlay.style.display = 'block';
  
  if(gameWon){

    gameOverMessage.textContent = 'Mabrook, You win !'
    overlay.classList.remove('start');
    overlay.classList.remove('lose');
    overlay.classList.add('win')
  } else{
    gameOverMessage.textContent = 'Sorry, better luck next time!'
    overlay.classList.remove('start');
    overlay.classList.add('lose')
  }
  this.resetGame();
 }
 resetGame(){
  this.missed = 0;
  phraseSection.innerHTML = '';
  for (let i = 0; i < keyLetters.length; i++) {
    keyLetters[i].classList.remove('wrong');
    keyLetters[i].classList.remove('chosen');
    keyLetters[i].disabled = false;
  }
  startBtn.textContent = 'Play Again';
  const harts = document.querySelectorAll('.tries img');
  for (let i = 0; i < harts.length; i++) {
    harts[i].src = 'images/liveHeart.png';
  }
 }
}
