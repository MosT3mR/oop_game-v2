/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.getElementById('overlay')
const harts = document.getElementById('scoreboard').getElementsByTagName('ol')[0].children

class Game {
 constructor(){
    this.missed = 0;
    this.phrases = [];
    this.activePhrase = null;
 }
 creatPhrase(phrase){
   this.phrases.push(phrase)
 }
 getRandomPhrase(){
   return this.phrases[Math.floor((Math.random()*this.phrases.length))]
 }
 startGame(){
  overlay.style.display = 'none';
  const theRandomPhrase = this.getRandomPhrase();
  this.activePhrase = theRandomPhrase;
  theRandomPhrase.addPhraseToDisplay();
 }
 checkForWin(){
  const countShow = document.getElementsByClassName('hide')
  if(countShow.length === 0){
    return true;
  } else {
    return false;
  }
 }
 removeLife(){
  this.missed += 1;
  harts[this.missed - 1].querySelector('img').src = 'images/lostHeart.png';
 }
 gameOver(){
   
 }
}
