/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const phraseSection = document.getElementById('phrase').getElementsByTagName('ul')[0]

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const splitPhrase = this.phrase.split('');
        splitPhrase.forEach(phraseShow => {
            let newPhrase = document.createElement('li');
            if(phraseShow === ' '){
                newPhrase.className = 'space'
                newPhrase.innerHTML = phraseShow
                phraseSection.appendChild(newPhrase)
            } else {
                newPhrase.className = `hide letter ${phraseShow}`
                newPhrase.innerHTML = phraseShow
                phraseSection.appendChild(newPhrase)
            }
        });
    }

    checkLetter(letter){
        const splitPhrase = this.phrase.split('');
        return splitPhrase.includes(letter);
    }
    
    showMatchedLetter(letter){
        const letters = document.getElementsByClassName(letter);
        for(let i = 0;i < letters.length; i++){
            letters[i].classList.remove('hide');
            letters[i].classList.add('show');
        }
    }
}