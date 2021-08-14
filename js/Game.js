/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.getElementById('overlay')

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
}