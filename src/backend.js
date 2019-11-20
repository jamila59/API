
// import { Wordbank } from './wordbank';

export class Hangman {
  constructor(response){
    this.word = response,
    this.score = 8;
  }

  checkWord(userInput){
  let array = this.word.toLowerCase();
  array.split("");
  for (let i = 0; i < array.length; i++) {
    if (this.score > 0) {
      if (userInput == array[i]){
        array[i].show();
        console.log("Input matches!");
      } else {
         console.log('Strike');
        this.score -= 1;
      }
    }
  }
  }
}
