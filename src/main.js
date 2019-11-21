import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Hangman } from './backend';
import { Wordbank } from './wordbank';



$(document).ready(function() {
  // debugger;
  let myNewGame;
  let wordbank = new Wordbank();
  (async () => {
    console.log("Ran!");
    const response = await wordbank.getDinoName();
    let answerWord = getElements(response);
    console.log(answerWord); //console log gives array of 30 strings
    let i = Math.floor(Math.random() * 5); //console log i gives random number
    myNewGame = new Hangman(answerWord[i]);
    console.log(answerWord[i]) //gives one words
    let answerWord1 = answerWord[i].toLowerCase().split("");
    $(".hiddenWord").text(myNewGame.checkWord());
    console.log(answerWord1);


  })();
  const getElements = function(response) {
    return response[1];
    }

  $("button").click(function(){
    let userInput = $("input#input").val();
    $(".dinoOutput").append(userInput+ "<br>");
    $(".scoreCounter").append(myNewGame.score+ "<br>");
    console.log(userInput); //takes user input
    console.log(myNewGame.score);
    myNewGame.checkWord(userInput);
    $(".hiddenWord").text(myNewGame.showWord);
    $(".hiddenWord").show();

    // wordbank.getDinoName();
  });
});
