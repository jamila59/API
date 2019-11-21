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
    const response2 = await wordbank.getGiphy();
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
    const getElements2 = function (response2) {
       document.getElementById('gif').src = response2.data[0].images.downsized_large.url;
       console.log(response2);
    }


  $("button").click(function(){
    (async () => {
    const response2 = await wordbank.getGiphy();
    let gif = getElements2(response2);
      })();
    let userInput = $("input#input").val();
    $(".dinoOutput").append(userInput+ "<br>");
    $(".scoreCounter").append(myNewGame.score+ "<br>");
    myNewGame.checkWord(userInput);
    $(".hiddenWord").text(myNewGame.showWord);
    $(".hiddenWord").show();



  });
});
