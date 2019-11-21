import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Hangman } from './backend';
import { Wordbank } from './wordbank';



$(document).ready(function() {
  let myNewGame;
  let wordbank = new Wordbank();
  (async () => {
    console.log("Ran!");
    const response = await wordbank.getDinoName();
    let answerWord = getElements(response);
    console.log(answerWord);
    let i = Math.floor(Math.random() * 5);
    myNewGame = new Hangman(answerWord[i]);
  })();
  const getElements = function(response) {
    return response[1];
    }
    const getElements1 = function(response2) {
      return response2[0];
      }

  $(".formOne").click(function(){
    let userInput = $("input#input").val();
    myNewGame.checkWord(userInput);
    wordbank.getDinoName();
  });
});
