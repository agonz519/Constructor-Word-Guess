const Letter = require("./Letter.js");

const Word = function(lettersArray) {
  this.lettersArray = lettersArray;
  this.displayCharacters = function() {
    let word = '';
    this.lettersArray.forEach(function(letter) {
        word += letter.maskUnmask() + ' ';
    });
    console.log(word);
  };
  this.guessLetter = function() {
    this.lettersArray.forEach(function(letter) {
      this.checkLetter(letter);
    })
  }
};

let a = new Letter('a');
let l = new Letter('l');
let e = new Letter('e');
let x = new Letter('x');

a.checkLetter('a');
l.checkLetter('l');
e.checkLetter('f');
x.checkLetter('x');
let newWord = new Word([a, l, e, x]);

newWord.displayCharacters();






