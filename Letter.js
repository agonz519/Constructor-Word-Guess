const Letter = function(letter) {
  this.letter = letter;
  this.letterGuessed = false;
  this.maskUnmask = function() {
    if (this.letterGuessed || this.letter === ' ') {
      return letter;
    } else {
      return '_';
    }
  };
  this.checkLetter = function(character) {

    if (character === letter) {
      this.letterGuessed = true;
      return 1;
      this.maskUnmask();
    } else {
      this.maskUnmask();
      return 0;
    }
  };
};

// Exporting the Letter constructor which we will use in Word.js
module.exports = Letter;

// --- Test Cases --- //
// let newLetter = new Letter('f');
// newLetter.checkLetter('f');

