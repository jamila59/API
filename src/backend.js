
// import { Wordbank } from './wordbank';

export class Hangman {
  constructor(response){
    this.word = response,
    this.score = 8;
    this.showWord = [];
  }

  checkWord(userInput){
    let checker = 0;
    if (this.score>0) {
      let array = this.word.toLowerCase();
      console.log(array);
      for (let i = 0; i < array.length; i++) {
        if (userInput == array[i]) {
        this.showWord[i] = array[i];
        console.log(this.showWord);
        console.log("Input matches!");
        checker = 1;

        }
      } if (checker !== 1){
          console.log('Strike');
          this.score -= 1;
        }
        return this.showWord;
      } else {
      console.log("you lose");
    }
  }
}
