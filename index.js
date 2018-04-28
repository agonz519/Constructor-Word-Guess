const inquirer = require('inquirer');
const Word = require("./Word.js");
const Letter = require("./Letter.js");

let words = ['Lochness Monster', 'Vampire', 'Werewolf', 'Big Foot', 'Dragon', 'Siren', 'Ghost', 'La Chupacabra', 'Mummy', 'Frankenstein'];
let guessesLeft = 7;
let letterArray = [];

let newWord = () => {
 return words[Math.floor(Math.random() * words.length)];
};

let x = newWord();
console.log(x);

function splitWord(currentWord) {
  var str = currentWord.toLowerCase();
  var split = str.split("");
  return split;
}

let wordSplitUp = splitWord(x);
console.log(wordSplitUp);

wordSplitUp.forEach((letter) => {
  let newLetter = new Letter(letter);
  letterArray.push(newLetter);

});

// console.log(letterArray);

let word = new Word(letterArray);
word.displayCharacters();

// word.guessLetter('e');
// word.displayCharacters();

let gameStart = function () {
  if (guessesLeft > 0) {
    inquirer.prompt([
      {
        name: 'letter',
        message: 'Guess a letter'
      },
    ]).then(function(answer) {
        word.guessLetter(answer.letter);
        word.displayCharacters();
        if (word.lettersArray.includes(answer.letter)){
          console.log('found');
        }
        guessesLeft--;
        gameStart();
      });
  } else {
    console.log('GAME OVER');
  }
};

gameStart();




