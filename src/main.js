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
    const response = await wordbank.getDinoName();
    let answerWord = getElements(response);
    myNewGame = new Hangman(answerWord);
  });
  const getElements = function(response) {
    let i = Math.floor(Math.random() * 5);
    return response[i];
    }
    //once someone submits Letter (usersLetter)

  $(".formOne").click(function(){
     let userInput = $("input#input").val();
    myNewGame.checkWord(userInput);
    wordbank.getDinoName();
  });
});
