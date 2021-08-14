/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = ' ';
const startBtn = document.getElementById('btn__reset');
const keys = document.getElementsByClassName('key')

startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    document.addEventListener('keyup',(e) =>{
        let keyPress = e.key
        for(let i = 0;i < keys.length;i++){
            if(keys[i].textContent === keyPress){
                if(keys[i].disabled){
                    continue
                }else{
                    game.handleInteraction(keys[i])
                }
            }
        }
        
    })
    for(let i = 0;i < keys.length;i++){
        keys[i].addEventListener('click', (e) => {
            game.handleInteraction(keys[i])
        })
    }
})