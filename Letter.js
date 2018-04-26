const Letter = function(letter) {
  this.letter = letter;
  this.letterGuessed = false;
  this.maskUnmask = function() {
    if (this.letterGuessed) {
      return letter;
    } else {
      return '_';
    }
  };
  this.checkLetter = function(character) {
    if (character === letter) {
      this.letterGuessed = true;
      console.log('You guessed correctly!');
      this.maskUnmask();
    } else {
      console.log('nope!');
      this.maskUnmask();
    }
  };
};

// Exporting the Letter constructor which we will use in Word.js
module.exports = Letter;

// --- Test Cases --- //
// let newLetter = new Letter('f');
// newLetter.checkLetter('f');

