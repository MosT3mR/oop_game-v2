/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startBtn = document.getElementById('btn__reset');
const game = new Game();
game.creatPhrase(new Phrase('Life is like a box of chocolates'));
game.creatPhrase(new Phrase('There is no trying'));
game.creatPhrase(new Phrase('May the force be with you'));
game.creatPhrase(new Phrase('No pain no Gain'));
game.creatPhrase(new Phrase('You talking to me'));
startBtn.addEventListener('click', () => {
    game.startGame();
})