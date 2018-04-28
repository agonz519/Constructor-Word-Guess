const Letter = require("./Letter.js");
let countYes = 0;
let countNo = 0;

const Word = function(lettersArray) {
  this.lettersArray = lettersArray;
  this.displayCharacters = function() {
    let word = '';
    this.lettersArray.forEach(function(letter) {
        word += letter.maskUnmask() + ' ';
    });
    console.log(word);
  };
  this.guessLetter = function(character) {
    let matchFound;
    this.lettersArray.forEach(function(letter) {
     matchFound = letter.checkLetter(character);
     if (matchFound === 1) {
       // if (countYes < 1 && countNo !) {
       //   console.log('Yes!');
       //   countYes++;
       // }
     } else {
       // if (countNo < 1 && countYes !== 1) {
       //   console.log('Nope!');
       //   countNo++;
       }
    });
  }
};

module.exports = Word;


// // -------- For Testing ---------- //
// let a = new Letter('a');
// let l = new Letter('l');
// let e = new Letter('e');
// let x = new Letter('x');
// let space = new Letter(' ');
// let g = new Letter('g');
//
// let newWord = new Word([a, l, e, x, space, g]);
// newWord.guessLetter('g');
// newWord.displayCharacters();







